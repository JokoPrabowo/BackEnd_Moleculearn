const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const postgre = require('../database');
const SALT = 10

function encryptPassword(password) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, SALT, (err, encryptedPassword) => {
        if (!!err) {
          reject(err);
          return;
        }

        resolve(encryptedPassword);
      });
    });
}

function checkPassword(encryptedPassword, password) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, encryptedPassword, (err, isPasswordCorrect) => {
        if (!!err) {
          reject(err);
          return;
        }
        resolve(isPasswordCorrect);
      });
    });
}
  
function createToken(data) {
    return jwt.sign(data, process.env.JWT_SECRET || "Rahasia", {
      expiresIn: 600 * 600,
    });
}
  
function verifyToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET || "Rahasia");
    } catch (error) {
      return null;
    }
}


const userController = {

    signUp: async(req, res) => {
        try {
            // const { username, fullname, password, pretest, level } = req.body
            const { username, fullname, password } = req.body
            const encrypt = await encryptPassword(password)
            const pretest = false
            const level = 1

            const data = await postgre.query("SELECT * from users where username = $1", [username.toLowerCase()])
            if(data.rowCount != 0){
                res.status(400).json({
                    status: "FAIL",
                    message: "Username telah digunakan!"
                })
                return;
            }

            const sql = 'INSERT INTO users(username, fullname, password, pretest, level) VALUES($1, $2, $3, $4, $5) RETURNING *'

            const { rows } = await postgre.query(sql, [username.toLowerCase(), fullname, encrypt, pretest, level])
            res.status(200).json({
                status: "REGISTER_SUCCESS",
                data: rows[0]
            })
        } catch (error) {
            res.status(422).json({
                status: "FAIL",
                message: error.message
            })
        }
    },

    signIn: async (req, res) => {
        try{
            const { username, password } = req.body

            if((username == "") || (password == "")){
                res.status(400).json({ status: "FAIL", message: "Harap isi semua data!" })
                return
            }

            const { rows } = await postgre.query("SELECT * from users where username = $1", [username.toLowerCase()])
            if(!rows[0]){
                res.status(404).json({ status: "FAIL", message: "Akun tidak ditemukan!" })
                return
            }

            const isPassword = await checkPassword(rows[0].password, password)
            if(!isPassword) {
                res.status(401).json({ status: "FAIL", message: "Password tidak tepat!" });
                return;
            }

            const user = rows[0]
            delete user.password

            const token = createToken(user);
            res.status(200).json({
                status: "LOGIN_SUCCESS",
                token,
                user,
              });
        }catch(error) {
            res.status(500).json({
                status: "FAIL",
                message: error.message
            })
        }
    },

    updateData: async (req, res) => {
        try{
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split("Bearer ")[1];
            const tokenPayload = verifyToken(token);

            const data = await postgre.query("SELECT * from users where username = $1", [tokenPayload.username])
            const user = data.rows[0]
            delete user.password

            user.pretest = true

            const sql = 'UPDATE users set pretest = $1 where username = $2 RETURNING *'
            const { rows } = await postgre.query(sql, [user.pretest, user.username])
            res.status(200).json({
                status: "UPDATE_SUCCESS",
                message: "Data pengguna telah diperbarui",
                user: rows[0],
              });
        }catch(error){
            res.status(500).json({
                status: "FAIL",
                message: error.message
            })
        }
    },

    updateLevel: async (req, res) => {
        try{
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split("Bearer ")[1];
            const tokenPayload = verifyToken(token);

            const data = await postgre.query("SELECT * from users where username = $1", [tokenPayload.username])
            const user = data.rows[0]
            delete user.password

            user.level = req.body.level

            const sql = 'UPDATE users set level = $1 where username = $2 RETURNING *'
            const { rows } = await postgre.query(sql, [user.level, user.username])
            res.status(200).json({
                status: "UPDATE_SUCCESS",
                message: "Data pengguna telah diperbarui",
                user: rows[0],
              });
        }catch(error) {
            res.status(500).json({
                status: "FAIL",
                message: error.message,
            });
        }
    },

    getAll: async(req, res) => {
        try {
            const { rows } = await postgre.query("select * from users")
            res.status(201).json({
                status: "RETRIEVE_SUCCESS",
                message: "Data pengguna telah didapatkan",
                user: rows,
              });
        } catch (error) {
            res.status(500).json({
                status: "FAIL",
                message: error.message,
            });
        }
    },
}

module.exports = userController
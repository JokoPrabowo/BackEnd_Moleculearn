const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userService = require("../../../services/userService");
const SALT = 10;

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

module.exports = {
  async signUp(req, res) {
      const username = req.body.username;
      const fullname = req.body.fullname;
      const password = await encryptPassword(req.body.password);
      const pretest = false;
      const level = 1;

      //cek username telah digunakan
      const existedUser = await userService.findByUsername(username);
      if(existedUser) {
          res.status(400).json({
              status: "FAIL",
              message: "Username telah digunakan!"
          });
          return;
      }

      //cek password kosong
      if(req.body.password === ""){
          res.status(422).json({
              status: "FAIL",
              message: "Password mohon untuk diisi!"
          });
          return;
      }

      //membuat akun
      userService
      .create({ username, fullname, password, pretest, level })
      .then((user) =>{
          res.status(201).json({
              status: "REGISTER_SUCCESS",
              data: user
          });
      })
      .catch((err) =>{
          res.status(422).json({
              status: "FAIL",
              message: err.message
          });
      });
  },

  async signIn(req, res) {
      const username = req.body.username.toLowerCase();
      const password = req.body.password;

      //mencari akun
      let user = await userService.findByUsername(username);
      if (!user) {
        res.status(404).json({ message: "Akun tidak ditemukan!" });
        return;
      }
      
      //cek kesamaan kata sandi
      const isPasswordCorrect = await checkPassword(user.password, password);
      if (!isPasswordCorrect) {
        res.status(401).json({ message: "Password tidak tepat!" });
        return;
      }
      
      //mengubah data ke bentuk JSON
      user = JSON.parse(JSON.stringify(user));
      delete user.password;
  
      const token = createToken(user);
  
      res.status(200).json({
        status: "LOGIN_SUCCESS",
        token,
        user,
      });
  },

  async updateData(req, res) {
    try {
      //cek dan mengambil data dalam token
      const bearerToken = req.headers.authorization;
      const token = bearerToken.split("Bearer ")[1];
      const tokenPayload = verifyToken(token);

      //mencari data pengguna
      const user = JSON.parse(
        JSON.stringify(await userService.findByUsername(tokenPayload.username))
      );
      delete user.password;

      // Masukan ke object Args
      user.pretest = true
      user.updatedAt = new Date();

      await userService.update(user, user.username);
      delete user.password;

      res.status(200).json({
        status: "UPDATE_SUCCESS",
        message: "Data pengguna telah diperbarui",
        user,
      });
      console.log(user);
    } catch (error) {
      res.status(500).json({
        status: "FAIL",
        message: error.message,
      });
    }
  },
  
  async updateLevel(req, res){
    try {
      //cek dan mengambil data dalam token
      const bearerToken = req.headers.authorization;
      const token = bearerToken.split("Bearer ")[1];
      const tokenPayload = verifyToken(token);

      //mencari data pengguna
      const user = JSON.parse(
        JSON.stringify(await userService.findByUsername(tokenPayload.username))
      );
      delete user.password;

      // Masukan ke object Args
      user.level = req.body.level;
      user.updatedAt = new Date();

      await userService.update(user, user.username);
      delete user.password;

      res.status(200).json({
        status: "UPDATE_SUCCESS",
        message: "Data pengguna telah diperbarui",
        user,
      });

    } catch (error) {
      console.log(error.message)
      res.status(500).json({
        status: "FAIL",
        message: error.message,
      });
    }
  },

  async getAll(req, res) {
    try {
        userService.findAll()
        .then((user) => {
          res.status(201).json({
            status: "REGISTER_SUCCESS",
            user
        });          
        })
    }catch(error){
      res.status(400).json({
        status: "FAIL",
        message: error.message,
      });
    }
  }
}
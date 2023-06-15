const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../../models");
const user = require("../../../models/user");
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
      expiresIn: 60 * 60,
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

        userService
        .create({ username, fullname, password, pretest })
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
    
        let user = await userService.findByUsername(username);
        if (!user) {
          res.status(404).json({ message: "Akun tidak ditemukan" });
          return;
        }
    
        const isPasswordCorrect = await checkPassword(user.password, password);
        if (!isPasswordCorrect) {
          res.status(401).json({ message: "Password salah!" });
          return;
        }
    
        user = JSON.parse(JSON.stringify(user));
        delete user.password;
    
        const token = createToken(user);
    
        res.status(200).json({
          status: "LOGIN_SUCCESS",
          token,
          user,
        });
    },
}
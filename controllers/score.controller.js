const postgre = require('../database');
const jwt = require("jsonwebtoken");

function verifyToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET || "Rahasia");
    } catch (error) {
        console.log(error.message);
      return null;
    }
}

const scoreController = {
    create: async (req, res) => {
        try{
            const { score } = req.body
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split("Bearer ")[1];
            const tokenPayload = verifyToken(token);

            const sql = 'INSERT INTO scores(username, score) VALUES($1, $2) RETURNING *'

            const { rows } = await postgre.query(sql, [tokenPayload.username, score])
            res.status(200).json({
                status: "SUCCESS",
                data: rows[0]
            })
        }catch(error) {
            res.status(500).json({
                status: "FAIL",
                message: error.message,
            })
        }
    },

    getAll: async (req, res) => {
        try{
            const { rows } = await postgre.query("SELECT * from scores")
            res.status(200).json({
                status: "SUCCESS",
                data: rows
            })
        }catch(error) {
            res.status(500).json({
                status: "FAIL",
                message: error.message,
            })
        }
    },

    getAllByUser: async (req, res) => {
        try{
            const { username } = req.body

            const { rows } = await postgre.query("SELECT * from scores where username = $1", [username])
            res.status(200).json({
                status: "SUCCESS",
                data: rows
            })
        }catch(error) {
            res.status(500).json({
                status: "FAIL",
                message: error.message,
            })
        }
    }
}

module.exports = scoreController
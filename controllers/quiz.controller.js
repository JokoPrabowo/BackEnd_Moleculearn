const postgre = require('../database');


const quizController = {
    create: async (req, res) => {
        try{
            const { question, a, b, c, d, answer } = req.body
            const sql = 'INSERT INTO quizzes(question, a, b, c, d, answer) VALUES($1, $2, $3, $4, $5, $6) RETURNING *'

            const { rows } = await postgre.query(sql, [question, a, b, c, d, answer])   
            res.status(200).json({
                status: "SUCCESS",
                data: rows[0]
            })
        }catch(error) {
            res.status(500).json({
                status: "FAIL",
                message: error.message,
            });
        }
    },
    
    getQuestion: async (req, res) => {
        try{
            const { rows } = await postgre.query("SELECT * FROM quizzes ORDER BY RANDOM() LIMIT 10")
            res.status(201).json({
                status: "RETRIEVE_SUCCESS",
                message: "Data pengguna telah didapatkan",
                data: rows,
              });
        }catch(error){
            res.status(500).json({
                status: "FAIL",
                message: error.message,
            });
        }
    },
}

module.exports = quizController
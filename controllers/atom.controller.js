const postgre = require('../database');

const atomController = {
    create: async (req, res) => {
        try{
            const { x, z, k, l, m, n, o, p } = req.body
            
            const sql = 'INSERT INTO atoms(x, z, k, l, m, n, o, p) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *'
            const { rows } = await postgre.query(sql, [x, z, k, l, m, n, o, p])
            res.status(201).json({
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

    getOne: async (req, res) => {
        try{
            const { rows } = await postgre.query("SELECT * FROM atoms ORDER BY RANDOM() LIMIT 1")
            res.status(201).json({
                status: "RETRIEVE_SUCCESS",
                message: "Data atom telah didapatkan",
                data: rows,
              });
        }catch(error) {
            res.status(500).json({
                status: "FAIL",
                message: error.message,
            })
        }
    }
}

module.exports = atomController
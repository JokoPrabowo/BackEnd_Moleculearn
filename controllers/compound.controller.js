const postgre = require('../database');

const compoundController = {
    create: async (req, res) => {
        try{
            const { z1, x1, n1, z2, x2, n2, image } = req.body
            
            const sql = 'INSERT INTO compounds(z1, x1, n1, z2, x2, n2, image) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *'
            const { rows } = await postgre.query(sql, [z1, x1, n1, z2, x2, n2, image])
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
            const { rows } = await postgre.query("SELECT * FROM compounds ORDER BY RANDOM() LIMIT 1")
            res.status(201).json({
                status: "RETRIEVE_SUCCESS",
                message: "Data pengguna telah didapatkan",
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

module.exports = compoundController
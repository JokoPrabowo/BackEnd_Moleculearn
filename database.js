const { Pool } = require('pg')
 
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    // user: process.env.DB_USERNAME,
    // host: process.env.DB_HOST,
    // database: process.env.DB_NAME,
    // password: process.env.DB_PASSWORD,
    // port:process.env.DB_PORT,
})

pool.connect((err) => {
    if (err) throw err
    console.log("Connect to PostgreSQL successfully!")
})

module.exports = pool
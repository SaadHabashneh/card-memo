const mysql = require("mysql");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'card-memo'
});

pool.getConnection((err, connection) => {
    if (err) {
        console.log('Error connecting to the database:', err);
    }
    else {
        console.log('Database is connected');
        connection.release();
    }
});

module.exports = pool;
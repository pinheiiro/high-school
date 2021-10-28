const configDB = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'school',
    define: {
        timestamps: false,
        freezeTableName: true
    }
}

module.exports = configDB;
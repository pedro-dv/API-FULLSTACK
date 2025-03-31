import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "L1nux2906*",
    database: "crud-db"
})
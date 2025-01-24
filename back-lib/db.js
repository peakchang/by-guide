import mysql, {} from "mysql2"
import dotenv from "dotenv"
dotenv.config();


export const sql_con = mysql.createConnection({
    host: process.env.HOST || '127.0.0.1',
    user: 'root',
    password: process.env.DBPWD,
    database: process.env.SCHEMA
})


/*

CREATE DATABASE byguide default CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS board(
    idx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(150),
    phone VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(50),
    nickname VARCHAR(50) UNIQUE,
    rate VARCHAR(5) DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    refresh_token TEXT

);


ALTER TABLE users ADD COLUMN refresh_token TEXT DEFAULT NULL;
ALTER TABLE hy_site MODIFY COLUMN hy_main_image VARCHAR(255);
ALTER TABLE hy_site MODIFY COLUMN hy_card_image VARCHAR(255);


*/
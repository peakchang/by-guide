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

CREATE TABLE IF NOT EXISTS users(
    idx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id VARCHAR(50) UNIQUE,
    sns_id VARCHAR(50) UNIQUE,
    password VARCHAR(150),
    phone VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(50),
    nickname VARCHAR(50) UNIQUE,
    rate VARCHAR(5) DEFAULT 1,
    profile_image VARCHAR(255),
    profile_thumbnail VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    connected_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    refresh_token TEXT
);



*/
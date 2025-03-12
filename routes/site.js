import express from "express";
import moment from "moment-timezone";
import axios from "axios";
import { getQueryStr } from "../back-lib/lib.js";
import { sql_con } from "../back-lib/db.js";

const siteRouter = express.Router();

siteRouter.post("/upload_content", async (req, res) => {
    const body = req.body;

    const queryStr = getQueryStr(body, 'insert', 'created_at');

    try {
        const insertQuery = `INSERT INTO site (${queryStr.str}) VALUES (${queryStr.question})`;
        await sql_con.promise().query(insertQuery, queryStr.values);
    } catch (error) {
        
        console.error(error.message);
        return res.status(400).json({});
    }

    return res.json({});
});

export { siteRouter }
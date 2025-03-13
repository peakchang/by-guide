import express from "express";
import moment from "moment-timezone";
import axios from "axios";
import { getQueryStr } from "../back-lib/lib.js";
import { sql_con } from "../back-lib/db.js";

const siteRouter = express.Router();


siteRouter.post("/view_detail", async (req, res) => {

    console.log('들어와야지?!?!');

    const id = req.body.id;
    let view_detail = {}

    try {
        const viewDetailQuery = `SELECT * FROM site WHERE idx = ?`;
        const [viewDetail] = await sql_con.promise().query(viewDetailQuery, [id]);
        console.log(viewDetail[0]);
        view_detail = viewDetail[0];

    } catch (error) {
        console.error(error.message);
    }
    
    res.json({ view_detail })
})
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
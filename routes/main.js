import express from "express";
// import { sql_con } from '../back-lib/db.js'
import { getQueryStr } from '../back-lib/lib.js';
import moment from "moment-timezone";
import bcrypt from "bcrypt";
const mainRouter = express.Router();



// mainRouter.get('/load_footer', async (req, res) => {
//     let footerData = {};
//     try {
//         const getFooterDataQuery = "SELECT * FROM form_status"
//         const [footerDataRows] = await sql_con.promise().query(getFooterDataQuery);
//         footerData = footerDataRows[0]
//     } catch (error) {

//     }
//     res.json({ footerData })
// })


export { mainRouter }
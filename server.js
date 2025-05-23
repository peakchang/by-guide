import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
// import { sql_con } from './back-lib/db.js'
import cookieParser from "cookie-parser"

dotenv.config();

import { handler } from "./front/build/handler.js"

import { mainRouter } from './routes/main.js';
import { apiRouter } from "./routes/api.js"

import { siteRouter } from './routes/site.js';
import { personRouter } from './routes/person.js';


// import { apiRouter } from "./routes/exapi.js"
app.use(cookieParser());
app.set('port', process.env.PORT || 3060);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ESM 오류 해결을 위해 __dirname, __filename 직접 변수 작성
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);

app.use(express.static('public', { ignore: ['favicon.ico'] }));
app.use('/editor', express.static(path.join(__dirname, 'public/uploads/editor')));
app.use('/img', express.static(path.join(__dirname, 'public/uploads/image')));
app.use('/py_img', express.static(path.join(__dirname, 'public/uploads/pyimg')));

let originLink;


if (process.env.NODE_ENV === 'production') {
    let whiteListArr = [];
    const whiteListStr = process.env.SITE_LINK
    console.log(whiteListStr);
    if (whiteListStr) {
        whiteListArr = whiteListStr.split(',');
    }
} else {
    originLink = "http://localhost:5173";
}

let corsOptions = {
    // 여기는 svelte (프론트엔드) 가 돌아가는 주소
    origin: originLink,
    credentials: true
}
app.use(cors(corsOptions));

app.enable('trust proxy');

app.use('/api/v3', apiRouter);
app.use('/api/v3/main', mainRouter);
app.use('/api/v3/site', siteRouter);
app.use('/api/v3/person', personRouter);


app.use('/chk', (req, res) => {
    res.send('백엔드 생성 완료!!')
});
app.use(handler);


app.listen(app.get('port'), () => {
    console.log(`server running in port ${app.get('port')}`);
})
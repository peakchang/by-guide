import express from "express";
import multer from "multer";
import moment from "moment-timezone";
import fs from "fs";
import path from "path";
import axios from "axios";
import qs from "qs";

const apiRouter = express.Router();

const storage = multer.diskStorage({
    destination: "temp/", // 임시 저장 경로
    filename(req, file, cb) {
        cb(null, file.originalname); // 원본 파일명을 사용
    },
});

const img_upload = multer({ storage });

apiRouter.get('/', (req, res) => {
    res.send('asldfjalisjdfliajsdf')
})


apiRouter.post('/send-sms', async (req, res) => {
    const { phone, message } = req.body;

    try {
        const response = await axios.post(
            'https://apis.aligo.in/send/',
            qs.stringify({
                key: process.env.ALIGO_API_KEY, // Aligo API Key
                user_id: process.env.ALIGO_USER_ID, // Aligo 계정 아이디
                sender: process.env.ALIGO_SENDER, // 발신번호 (사전 등록 필요)
                receiver: phone, // 수신자 번호 (예: 01012345678)
                msg: message, // 문자 내용
                testmode_yn: 'N', // 테스트 모드 ('Y'이면 테스트, 'N'이면 실제 발송)
            }),
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }
        );

        res.json({ success: true, data: response.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
})


apiRouter.post('/delete_sort_img', async (req, res, next) => {
    console.log('들어는 오는거야?!?!?');

    const body = req.body;
    console.log(body);

    const delPath = `public/uploads/image/${body.getFolder}/${body.getImgName}`

    console.log(delPath);


    try {
        await fs.unlink(delPath, (err) => {
            console.error(err);

        })
    } catch (error) {
        status = false
        console.error(error);
    }
    res.json({})
})
apiRouter.post('/upload_sort_img', img_upload.single('onimg'), (req, res, next) => {
    console.log('여긴 문제 없었는데?');

    console.log('일단 들어는 오는거지?!?!??!');


    let baseUrl
    const body = req.body;
    console.log(body);
    const { folderName } = req.body; // POST로 전달된 폴더명
    if (!folderName) {
        return res.status(400).send("Folder name is required");
    }

    try {
        const uploadPath = imgFolderChk(folderName)
        // 파일 이동
        const tempPath = req.file.path; // 임시 저장된 경로

        console.log(tempPath);
        console.log(uploadPath);

        const targetPath = path.join(uploadPath, req.file.originalname); // 최종 저장 경로
        fs.renameSync(tempPath, targetPath); // 파일 이동

        const origin = req.get('host');
        // baseUrl = req.protocol + '://' + origin + '/img/' + folderName + '/' + req.file.filename;
        baseUrl = '/img/' + folderName + '/' + req.file.filename;
        console.log(baseUrl);


        console.log(baseUrl);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }

    // let status = true;






    res.json({ baseUrl })
})

function imgFolderChk(folderName) {
    let setFolder
    const now = moment().format('YYMMDD')

    try {
        fs.readdirSync(`public`);
    } catch (error) {
        fs.mkdirSync(`public`);
    }


    try {
        fs.readdirSync(`public/uploads`);
    } catch (error) {
        fs.mkdirSync(`public/uploads`);
    }

    try {
        fs.readdirSync(`public/uploads/image`);
    } catch (error) {
        fs.mkdirSync(`public/uploads/image`);
    }

    try {
        fs.readdirSync(`public/uploads/image/${folderName}`);
    } catch (error) {
        fs.mkdirSync(`public/uploads/image/${folderName}`);
    }
    setFolder = `public/uploads/image/${folderName}`


    return setFolder;
}

export { apiRouter }
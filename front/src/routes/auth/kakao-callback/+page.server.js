// // src/routes/auth/kakao/callback/+server.js
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { sql_con } from "$src/lib/server/db";
import { KAKAO_CLIENT_ID, KAKAO_REDIRECT_URI, JWT_SECRET } from '$env/static/private';

export async function load({ params, url }) {

    const code = url.searchParams.get('code');
    console.log(code);
    console.log(KAKAO_CLIENT_ID);
    console.log(KAKAO_REDIRECT_URI);

    let data = {
        loginStatus: false,
        userInfo: {},
    }

    if (!code) {
        // 여기 에러 처리는 어떻게 할지 물어보기!
        return Error
    }
    try {
        const tokenResponse = await axios.post(
            'https://kauth.kakao.com/oauth/token',
            null,
            {
                params: {
                    grant_type: 'authorization_code',
                    client_id: KAKAO_CLIENT_ID,
                    redirect_uri: KAKAO_REDIRECT_URI,
                    code,
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                },
            }
        );
        const { access_token } = tokenResponse.data;
        const userResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        const kakaoUserInfo = userResponse.data;
        console.log(kakaoUserInfo);

        const getUserInfoQuery = "SELECT * FROM users WHERE sns_id = ?";
        const [getUserInfo] = await sql_con.promise().query(getUserInfoQuery, [kakaoUserInfo.id]);
        if (getUserInfo.length > 0) {
            userInfo = getUserInfo[0];
            data.loginStatus = true;
        } else {
            data.userInfo.sns_id = kakaoUserInfo.id;
            data.userInfo.profile_image = kakaoUserInfo.properties.profile_image
            data.userInfo.profile_thumbnail = kakaoUserInfo.properties.thumbnail_image
            data.userInfo.name = kakaoUserInfo.properties.name
            // data.userInfo.name = '야무무'
            data.userInfo.phone =  kakaoUserInfo.properties.phone
            data.userInfo.phone =  '01021902197'
        }

    } catch (error) {
        console.error(error.message);
    }


    return data
}
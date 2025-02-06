import { sql_con } from "$src/lib/server/db";
import { error, json } from '@sveltejs/kit';
import { getQueryStr } from "$src/lib/server/lib";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';
import bcrypt from 'bcrypt';
/*
>> 프론트에서 가져온 추가 정보들로 DB 입력 / JWT토큰 생성해서 아이디 값 저장 / 다시 DB에 토큰 값 저장하기!
>> 이후 리턴 한 다음에 프론트에서 메인페이지로 refresh 하기!!
*/
export async function POST({ request, cookies }) {

    const body = await request.json();
    console.log(body);
    try {
        const deleteTokenQuery = "UPDATE users SET refresh_token = '' WHERE idx = ?";
        await sql_con.promise().query(deleteTokenQuery, [body.idx]);
        console.log(cookies);
        cookies.delete('tk')

    } catch (error) {

    }


    return json({})
}


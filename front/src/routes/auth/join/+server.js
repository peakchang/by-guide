import { sql_con } from "$src/lib/server/db";
import { json } from '@sveltejs/kit';
import { getQueryStr } from "$src/lib/server/lib";

export async function POST({ request, cookies }) {
    console.log('들어옴?!?!?!');
    console.log(request);
    const body = await request.json();
    console.log(body);

    const queryStr = getQueryStr(body, 'insert');
    console.log(queryStr);


    try {
        const testQuery = `INSERT INTO users (${queryStr.str}) VALUES (${queryStr.question})`;
        const [testData] = await sql_con.promise().query(testQuery, queryStr.values);
        console.log(testData);
    } catch (error) {
        console.error(error.message);
    }

    console.log(cookies);
    cookies.set('visited', 'true', { path: '/' });

    return json({ testData: 'testData', gogoData: 'gogoData' })
}

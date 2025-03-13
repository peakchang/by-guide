import { user_info } from "$lib/store.js";
import axios from "$node_modules/axios";
import { back_api } from "$src/lib/const";

// 사이트 접속시 user_info store 값에 user 정보 넣기
export const load = async ({ params, url, data }) => {
    console.log(params.id);

    let view_detail = {}

    try {
        const res = await axios.post(`${back_api}/site/view_detail`, { id: params.id })
        console.log(res);
        if (res.status == 200) {
            view_detail = res.data.view_detail
        }

    } catch (error) {

    }

    return { view_detail }

}
import moment from "moment/moment";
import api from "../ApiData"

const login=(data)=>{

    const fetchregister=async()=>{
        const res= await globalThis.fetch(api.auth.login, {
            method: 'POST',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userPassPhone:data.phone,
                user_pass_pass: data.password
            }),
        })
        const json =await res.json();
        return json;
    }

    return fetchregister();
}

export default login;
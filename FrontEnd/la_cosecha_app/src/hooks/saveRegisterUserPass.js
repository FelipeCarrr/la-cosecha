import moment from "moment/moment";
import api from "../ApiData"

const saveRegisterUserPass=(dataUser,userId)=>{

    const fetchregister=async()=>{
        const res= await globalThis.fetch(api.auth.savedPassword, {
            method: 'POST',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userPassPhone:dataUser.phone,
                user_pass_pass: dataUser.password,
                userId:{
                    userId:userId
                },
                states_id:{
                    states_id:1
                },
                created_at:moment().format('YYYY-MM-DD'),
                updated_at:moment().format('YYYY-MM-DD')
            }),
        })
        const json =await res.json();
        return json;
    }

    return fetchregister();
}


export default saveRegisterUserPass;
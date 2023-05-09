
import api from "../ApiData"

const saveRegisterUser=(dataUser)=>{

    const fetchregister=async()=>{
        const res= await globalThis.fetch(api.user.savedUser, {
            method: 'POST',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_name:dataUser.name,
                rol_id:{
                    rol_id:1
                },
                user_phone:dataUser.phone,
                user_second_phone:dataUser.secondPhone,
                states_id:{
                    states_id:1
                },
                created_at:Date(),
                updated_at:Date()
            }),
        })
        const json =await res.json();
        return json;
    }

    return fetchregister();
}


export default saveRegisterUser;
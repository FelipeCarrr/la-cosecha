import moment from "moment/moment";
import api from "../ApiData"

const saveRegisterUserAddres=(dataAddress,userId)=>{

    const fetchregister=async()=>{
        const res= await globalThis.fetch(api.address.savedAddress, {
            method: 'POST',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_address_name:dataAddress.name_domicile,
                user_address_kind_street: dataAddress.kind_street,
                user_address_number_street:dataAddress.number_street,
                user_address_first_number_house_street: dataAddress.first_number_house,
                user_address_second_number_house_street:dataAddress.second_number_house,
                user_address_indication:dataAddress.indication,

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


export default saveRegisterUserAddres;
import moment from "moment/moment";
import api from "../ApiData";

const saveMerchantProvider =(data,userId,URL)=>{
    const fetchregister=async()=>{
        const res= await globalThis.fetch(api.provider.saveProvider, {
            method: 'POST',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                providerNameEnterprise:data.nameBussines,
                providerPhoto:URL,
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

export default saveMerchantProvider;
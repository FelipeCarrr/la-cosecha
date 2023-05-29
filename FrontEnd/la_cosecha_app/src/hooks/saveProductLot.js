import moment from "moment/moment";
import api from "../ApiData"
import AsyncStorage from "@react-native-async-storage/async-storage";

const saveProductLot=(data,url,providerId)=>{
    console.log(providerId);
    const fetchregister=async()=>{
        const userId=await AsyncStorage.getItem('userId');
        const res= await globalThis.fetch(api.productLot.saveProductLot, {
            method: 'POST',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product_lot_name:data.productName,
                product_lot_description:data.productDescription,
                product_lot_price:data.productPrice,
                product_lot_cant:data.productCant,
                product_lot_foto:url,
                providerId:{
                    providerId:providerId
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

export default saveProductLot;
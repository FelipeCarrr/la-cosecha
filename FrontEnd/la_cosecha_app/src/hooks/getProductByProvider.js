
import api from "../ApiData"

const getProductByProvider=(providerId)=>{
    console.log(providerId+'sias');
    const fetchregister=async()=>{
        const res= await globalThis.fetch(api.productLot.getProductByProvider, {
            method: 'POST',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                providerId:providerId
            }),
        })
        const json =await res.json();
        return json.data;
    }

    return fetchregister();
}

export default getProductByProvider;
import api from "../ApiData";

const getProductInfo=(id)=>{

    const fetchregister=async()=>{
        
        const res= await globalThis.fetch(api.productLot.getProductLot+'/'+id, {
            method: 'GET',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
            } 
        })
        const json =await res.json();
        return json.data;
    }

    return fetchregister();
}

export default getProductInfo;
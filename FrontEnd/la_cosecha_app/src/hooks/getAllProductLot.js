import api from "../ApiData"


const getAllProductLot=()=>{

    const fetchregister=async()=>{
        
        const res= await globalThis.fetch(api.productLot.getProductLot, {
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

export default getAllProductLot;
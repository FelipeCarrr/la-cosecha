import api from "../ApiData"


const getAllProvider=()=>{

    const fetchregister=async()=>{
        
        const res= await globalThis.fetch(api.provider.getProvider, {
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

export default getAllProvider;

const ip='192.168.0.111';
const port='3000';
const domain='http://'+ip+':'+port;

const api={
    user:{
        savedUser:domain+'/user/'
    },
    auth:{
        savedPassword:domain+'/auth/',
        login:domain+'/auth/login'
    },
    address:{
        savedAddress:domain+'/address/'
    },
    productLot:{
        saveProductLot:domain+'/productLot',
        getProductLot:domain+'/productLot',
        getProductByProvider:domain+'/productLot/provider',
    },
    provider:{
        saveProvider:domain+'/provider',
        getProvider:domain+'/provider'
    }

}

export default api;
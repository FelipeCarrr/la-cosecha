
const ip='192.168.0.111';
const port='3000';
const domain='http://'+ip+':'+port;

const api={
    user:{
        savedUser:domain+'/user/'
    },
    auth:{
        savedPassword:domain+'/auth/'
    }

}

export default api;
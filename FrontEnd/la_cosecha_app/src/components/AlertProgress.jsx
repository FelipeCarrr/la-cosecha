import React from "react";
import AwesomeAlert from "react-native-awesome-alerts";
import theme from "../theme";

const AlertProgress=({showAlert})=>{
    return(
        <AwesomeAlert
            progressSize='large'
            show={showAlert}
            animatedValue={0.5}
            showProgress={true}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            
            progressColor={theme.colors.primary}
            overlayStyle={{
                width:'100%',
                height:'100%'
            }}
        />
    )
}

export default AlertProgress;
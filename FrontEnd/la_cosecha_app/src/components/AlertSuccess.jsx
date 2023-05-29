import React from "react";
import AwesomeAlert from "react-native-awesome-alerts";
import theme from "../theme";

const AlertSuccess=({showAlert,...props})=>{
    return(
        <AwesomeAlert
            show={showAlert}
            showProgress={false}
            animatedValue={0.1}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="OK"
            confirmButtonColor={theme.colors.primary}
            overlayStyle={{
                width:'100%',
                height:'100%'
            }}
            alertContainerStyle={{justifyContent:'center',alignItems:'center'}}
            {...props}
        />
    )
}

export default AlertSuccess
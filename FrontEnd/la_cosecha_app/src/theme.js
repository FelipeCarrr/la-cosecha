import  Constants  from "expo-constants"
const theme = {
    containerView:{
        marginHorizontal:30,
        marginTop: Constants.statusBarHeight
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    colors:{
        primary:"#14AE5C",
        primaryDark:"#108044",
        backgroundColorPrimary:'#fff'
    },
    fonts:{
        main:'System'
    },
    fontWeights:{
        normal:'400',
        bold:'700'
    },
    imageLogin:{
        width:250,
        height: 250,
        borderRadius: 4,
        marginTop: 50,
        marginBottom: 10,
        
    },
    borderRadius:{
        primary:20
    },
    textInputError:{
        color:'red',
        marginTop:-10,
        fontSize:15,
        marginBottom:-5
    }
}

export default theme
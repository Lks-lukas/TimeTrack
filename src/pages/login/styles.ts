import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../glogal/themes";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        marginBottom: '5%',
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center'

    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        marginBottom: '5%',
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        marginBottom: '5%',
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height:240,
        width:240,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight:'900',
        marginTop:10,
        fontSize:32,
        color:themes.colors.primary,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 2, height: 2 }, 
        textShadowRadius: 1,
    },
    textInput:{
        fontWeight: 'bold',
        marginLeft: 5,
        color:themes.colors.gray,
    }
});


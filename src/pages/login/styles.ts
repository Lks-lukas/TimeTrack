import { Dimensions, StyleSheet } from "react-native";

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
        backgroundColor:'white'
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        marginBottom: '5%',
        backgroundColor:'white',
        alignItems: 'center'
    },
    logo: {
        height:180,
        width:180,
    },
    text: {
        fontWeight:'bold',
        marginTop:40
    }
});


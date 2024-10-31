import { Dimensions, StyleSheet } from "react-native";
import { themes } from '../../global/themes';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isLargeScreen = windowWidth > 800;

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: themes.colors.bgScreen,
        borderWidth: 1,             
        borderColor: "#90EE90",     
        borderRadius: 10,                            
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8,               
        width: isLargeScreen ? '50%' : '100%', 
        height: isLargeScreen ? '80%' : '100%', 
        overflow: 'hidden', 
        padding: isLargeScreen ? 40 : 20, 
    },
    boxTop: {
        height: isLargeScreen ? windowHeight / 4 : windowHeight / 3,
        width: '100%',
        marginTop: isLargeScreen ? '10%' : '20%', 
        alignItems: 'center',
        justifyContent: 'center',
        overflow: isLargeScreen ? 'hidden' : 'visible', 
    },
    boxMid: {
        height: isLargeScreen ? windowHeight / 6 : windowHeight / 4,
        width: '100%',
        paddingHorizontal: isLargeScreen ? '10%' : '5%', 
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    boxBottom: {
        height: isLargeScreen ? windowHeight / 10 : windowHeight / 16,
        width: isLargeScreen ? '30%' : '80%', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.primary,
        borderRadius: 20,
    },
    textBottom: {
        fontWeight: '900',
        fontSize: 20,
        color: 'black',
    },
    logo: {
        height: isLargeScreen ? 180 : 240, 
        width: isLargeScreen ? 180 : 240,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', 
    },
    text: {
        fontWeight: '900',
        marginTop: 10,
        fontSize: isLargeScreen ? 28 : 32,
        color: themes.colors.primary,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5,
    },
    textInput: {
        fontWeight: 'bold',
        marginLeft: 5,
        color: themes.colors.lightGray,
        fontSize: isLargeScreen ? 16 : 14,
    },
    input: {
        flex: 1,
        height: 40,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
    },
    boxInput: {
        backgroundColor: themes.colors.lightGray,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 10,
        width: '100%',
        paddingHorizontal: 10,
    }
});
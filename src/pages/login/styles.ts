import { Dimensions, StyleSheet } from "react-native";
import { themes } from '../../global/themes';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isLargeScreen = windowWidth > 800;
const isMediumScreen = windowWidth < 400;
const  isSmallScreen = windowWidth < 300

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'column',
        backgroundColor: themes.colors.bgScreen,                                       
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        elevation: 8,               
        width: isLargeScreen ? '60%' : '100%', 
        maxWidth: 900, 
        height: '100%', 
        overflow: 'hidden', 
        padding: isLargeScreen ? 50 : isSmallScreen ? 15 : 20, 
    },
    boxTop: {
        height: isLargeScreen ? windowHeight / 4 : windowHeight / 3,
        width: '100%',
        marginTop: isLargeScreen ? '5%' : isSmallScreen ? '15%' : '20%', 
        alignItems: isLargeScreen ? 'center' : 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        columnGap: 10,
    },
    boxMid: {
        marginTop: isLargeScreen ? '5%' : isSmallScreen ? '15%' : '5%',
        height: isLargeScreen ? windowHeight / 4 : windowHeight / 4,
        width: '100%',
        paddingHorizontal: isLargeScreen ? '12%' : '5%', 
        alignItems: isLargeScreen ? 'center': 'baseline',
        justifyContent: 'center',
        columnGap: 10,
    },
    boxButton: {
        height: isLargeScreen ? windowHeight / 15 : windowHeight / 16,
        width: isLargeScreen ? '15%' : '80%', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.primary,
        borderRadius: 20,
        columnGap: 10,
    },
    textButton: {
        fontWeight: '900',
        fontSize: isLargeScreen ? 22 : isSmallScreen ? 16 : 18,
        color: 'black',
    },
    logo: {
        height: isLargeScreen ? 200 : isSmallScreen ? 120 : 240, 
        width: isLargeScreen ? 200 : isSmallScreen ? 120 : 240,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', 
    },
    textMid: {
        fontWeight: '900',
        marginTop: 10,
        height: isLargeScreen ? '20%' : '20%',
        columnGap: 10,
        fontSize: isLargeScreen ? 35 : isSmallScreen ? 24 : 32,
        color: 'white',
        marginBottom: isLargeScreen ? '2%' : '0.1%',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5,
    },
    textInput: {
        fontWeight: 'bold',
        marginLeft: 5,
        color: themes.colors.lightGray,
        fontSize: isLargeScreen ? 18 : isSmallScreen ? 12 : 14,
    },
    input: {
        flex: 1,
        height: 40,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 15,
        backgroundColor: 'white'
    },
    boxInput: {
        backgroundColor: themes.colors.lightGray,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 10,
        width: isLargeScreen ? '60%' : '100%',
        maxWidth: 500,
        paddingHorizontal: 10,
    }
});
import { StyleSheet } from "react-native"
export const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4d7e2',
    },
    card: {
        width : '35%',
        height: '70%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff0f6',
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#e85a94',
        textAlign: 'left',
        marginBottom: 20,
        marginTop: 20,
    },
    textInput: {
        fontSize: 24,
        width: '100%',
        fontWeight: 'bold',
        color: '#e85a94',
        textAlign: 'left',
        outlineWidth: 0,
        outlineColor: 'transparent',

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#c999ad',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        width: '80%',
        height: 40,
    },
    passwordInput: {
        width: '90%',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#e85a94',
        textAlign: 'left',
        outlineWidth: 0,
        outlineColor: 'transparent',
    }
})

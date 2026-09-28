import { Pressable, StyleSheet, Text, View, ViewStyle} from "react-native";
import { Href, Link} from "expo-router";
type ButtonObj = {
    onPress?: () => void;
    href: Href;

}; 
// Button for login and such 
export default function LogButton({onPress, href, ...objs} : ButtonObj) {
        return(
            <View>
                <Link href ={href} asChild>
                <Pressable style={styles.button} onPress={onPress} {...objs}>
                    <Text style={styles.loginText}>Login Here</Text>
                </Pressable>
                </Link>
            </View>
        );
        
    }

const styles = StyleSheet.create ({
    button: {
        justifyContent: 'center' as const,
        alignItems: 'center' as const,
        position: 'absolute',
        zIndex: 30,
        width: 100,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ffbfdd',
        shadowOpacity: 0.15,
        shadowRadius: 8,
        shadowOffset: {
        width: 0,
        height: 3,
        },
        elevation: 30,
    },
    loginText: {
        color: '#891032',
        fontWeight: '300' as const,
    },
}
)

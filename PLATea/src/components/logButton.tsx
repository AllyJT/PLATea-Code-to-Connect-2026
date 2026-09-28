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
        marginTop: 20,      
        width: 100,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ffcae1',
        shadowOpacity: 0.15,
        shadowRadius: 4,
        shadowOffset: {
        width: 0,
        height: 3,
        },
    },
    loginText: {
        color: '#ed1b57',
        fontWeight: '500' as const,
    },
}
)

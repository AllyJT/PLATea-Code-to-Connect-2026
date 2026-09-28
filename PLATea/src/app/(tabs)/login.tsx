import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "@/styles/logIn";
import LogButton from "@/components/logButton";
import { useState } from "react";
import {Ionicons} from "@expo/vector-icons";


export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (   
        <View style = {styles.container}>
            <View style = {styles.card}>
                <Text style = {styles.text}>Login Screen</Text>

                {/*Login Component*/}
                {/*Email */}
                <View style ={styles.inputContainer}>
                <TextInput style={[styles.textInput]} placeholder='Email' 
                value={email} onChangeText={setEmail} keyboardType='email-address' placeholderTextColor="#eebfd1" />
                </View>

                {/*Password */}
                <View style ={styles.inputContainer}>
                    <TextInput style={styles.passwordInput} placeholder='Password' 
                    value={password} onChangeText={setPassword} secureTextEntry={ !showPassword } placeholderTextColor="#eebfd1"/>
                    <Pressable onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="#e85a94" />
                    </Pressable>
                </View>
                <LogButton href={'/(tabs)'}></LogButton>
            </View>
        </View>
    )
}
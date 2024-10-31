import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // Log para verificar o início da função
        console.log("Tentando enviar a requisição de login...");

        try {
            const response = await fetch('http://localhost:5045/api/aUser/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            // Log para verificar o status da resposta
            console.log("Resposta recebida:", response);

            if (response.ok) {
                const data = await response.json();
                console.log("Login realizado com sucesso:", data);
                Alert.alert("Login realizado com sucesso!", `Bem-vindo, ${data.userName}`);
            } else {
                const errorData = await response.json();
                console.error("Erro no login:", errorData);
                Alert.alert("Erro", errorData.message || "Não foi possível fazer login");
            }
        } catch (error) {
            console.error("Erro de conexão:", error);
            Alert.alert("Erro de conexão", "Não foi possível conectar ao servidor");
        }
    };

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    style={style.logo}
                    source={Logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>
                    Bem Vindo de Volta
                </Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.textInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input} 
                        placeholder="Digite seu e-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons 
                        name='email'
                        size={20}
                        color={'black'}
                    />
                </View>
                <Text style={style.textInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input} 
                        placeholder="Digite sua senha"
                        secureTextEntry
                        autoCapitalize="none"
                        value={password}
                        onChangeText={setPassword}
                    />
                    <MaterialIcons 
                        name='lock'
                        size={20}
                        color={'black'}
                    />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity onPress={handleLogin}>
                    <Text style={style.textBottom}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
import React from "react";

import {
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

import {style} from "./styles";
import Logo from '../../assets/logo.png'

export default function Login() {
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                   <Image style={style.logo}
                       source={Logo}
                       resizeMode="contain"
                   />
                   <Text  style={style.text}>
                    Bem Vindo de Volta
                   </Text>
                </View>
             <View style={style.boxMid}>
                <Text style= {style.textInput}>ENDEREÇO DE E-MAIL</Text>
                <TextInput/>
                <Text style= {style.textInput}>SENHA</Text>
                <TextInput/>
            </View>
            <View style={style.boxBottom}>
            </View > 
        </View>
    );
}
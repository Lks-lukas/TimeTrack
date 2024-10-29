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
                   />
                   <Text>
                    Bem Vindo de Volta
                   </Text>
                </View>
             <View style={style.boxMid}>
                <Text>Endereço de e-mail</Text>
                <TextInput/>
                <Text>Senha</Text>
                <TextInput/>
            </View>
            <View style={style.boxBottom}>
            </View > 
        </View>
    );
}
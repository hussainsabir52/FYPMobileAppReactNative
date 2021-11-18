import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'


import Button from '../../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

import api from '../../services/api'

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUpHandler = () => {
        navigation.navigate('SignUp');
    }

    const forgotPassHandler = () => {
        navigation.navigate('Home')
    }


    const loginInHandler = async () => {
        if (email) {
            if (password) {
                const data = {
                    email: email,
                    password: password
                };
                try {
                    var results = await api.loginUser(data);


                    console.log(results );
                    if (results?.Message == 'Not Verified') {
                        navigation.navigate('EmailVerification');
                    }
                    // Alert.alert("Message", results?.Message);
                } catch (err) {
                    console.log(err);
                }
            } else {
                Alert.alert("Error", "Please enter a password.");
            }

        }

    }
    return (

        <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>

            <View style={styles.flex_row}>
                <View style={styles.medium_title_box}>
                    <Text style={styles.medium_title} ellipsizeMode={'clip'}>
                        {'Welcome back!'}
                    </Text>
                </View>
            </View>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
                <Text style={styles.text_body} ellipsizeMode={'clip'}>
                    {'Login to your existing account of Giro'}
                </Text>

            </View>
            <View style={[styles.textInputView, styles.viewShadow]}>
                <FontAwesomeIcon icon={faUser} size={20} style={{ flex: 1 }} />

                <TextInput
                    placeholder="Username"
                    style={styles.textInput}
                    onChangeText={(value) => setEmail(value)}
                />
            </View>
            <View style={[styles.textInputView, styles.viewShadow]}>
                <FontAwesomeIcon icon={faLock} size={20} style={{ flex: 1 }} />

                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.textInput}
                    onChangeText={(value) => setPassword(value)}

                />
            </View>
            <View>

                <Text onPress={forgotPassHandler} style={styles.forgotPassText}>Forgot Password?</Text>
            </View>
            <View style={styles.footer}>
                <Button
                    label="LOG IN"
                    styles={{ button: styles.primaryButton, label: styles.buttonWhiteText }}
                    onPress={loginInHandler} />
            </View>
            <View style={styles.signUpView}>
                <Text style={styles.signUpText}>Don’t have an account?<Text onPress={signUpHandler} style={styles.signUpText}> Sign Up</Text></Text>
            </View>

        </ScrollView>

    );
};

export default Login;

import React from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'


import Button from '../../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
const EmailVerification = ({ navigation }) => {

    const signUpHandler = () => {
        navigation.navigate('SignUp');
    }
    const forgotPassHandler = () => {

    }
    const loginInHandler = () => {

    }
    return (

        <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>

            <View style={styles.flex_row}>
                <View style={styles.medium_title_box}>
                    <Text style={styles.medium_title} ellipsizeMode={'clip'}>
                        {'Email Verification'}
                    </Text>
                </View>
            </View>

            <View style={[styles.textInputView, styles.viewShadow]}>
                <FontAwesomeIcon icon={ faClipboardCheck } size={20} style={{ flex: 1 }} />

                <TextInput
                    placeholder="Enter OTP"
                    style={styles.textInput}
                />
            </View>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
                <Text style={styles.text_body} ellipsizeMode={'clip'}>
                    {'A code has been sent to your email.'}
                </Text>

            </View>
            <View style={styles.footer}>
                <Button
                    label="Verify"
                    styles={{ button: styles.primaryButton, label: styles.buttonWhiteText }}
                    onPress={loginInHandler} />
            </View>

        </ScrollView>

    );
};

export default EmailVerification;

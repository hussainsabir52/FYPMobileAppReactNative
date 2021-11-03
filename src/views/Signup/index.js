import React from 'react';
import { ScrollView, Text, View, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faLock, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'


import styles from './styles';
import Button from '../../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Signup = ({ navigation }) => {
    const goBackHandler = () => {
        navigation.goBack();
    }
    return (
        <ScrollView style={styles.scroll}>

            <View style={styles.flex_row}>
                <View style={styles.medium_title_box}>
                    <Text style={styles.medium_title} ellipsizeMode={'clip'}>
                        {"Let's Get Started"}
                    </Text>
                </View>
            </View>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
                <Text style={styles.text_body} ellipsizeMode={'clip'}>
                    {'Create an account of Giro to get all features'}
                </Text>

            </View>
            <View style={[styles.textInputView, styles.viewShadow]}>
                <FontAwesomeIcon icon={faUser} size={20} style={{ flex: 1 }} />
                <TextInput
                    placeholder="First Name"
                    style={styles.textInput}
                />
            </View>
            <View style={[styles.textInputView, styles.viewShadow]}>
                <FontAwesomeIcon icon={faUser} size={20} style={{ flex: 1 }} />
                <TextInput
                    placeholder="Middle Name"
                    style={styles.textInput}
                />
            </View>
            <View style={[styles.textInputView, styles.viewShadow]}>
                <FontAwesomeIcon icon={faUser} size={20} style={{ flex: 1 }} />
                <TextInput
                    placeholder="Last Name"
                    style={styles.textInput}
                />
            </View>
            <View style={[styles.textInputView, styles.viewShadow]}>
                <FontAwesomeIcon icon={faEnvelope} size={20} style={{ flex: 1 }} />
                <TextInput
                    placeholder="Email"
                    style={styles.textInput}
                />
            </View>
            <View style={[styles.textInputView, styles.viewShadow]}>
                <FontAwesomeIcon icon={faMobile} size={20} style={{ flex: 1 }} />
                <TextInput
                    placeholder="Phone"
                    style={styles.textInput}
                />
            </View>
            <View style={[styles.textInputView, styles.viewShadow]}>
                <FontAwesomeIcon icon={faLock} size={20} style={{ flex: 1 }} />

                <TextInput
                    placeholder="Password"
                    // secureTextEntry={true}
                    style={styles.textInput}
                />
            </View>
            <View style={[styles.textInputView, styles.viewShadow]}>
                <FontAwesomeIcon icon={faLock} size={20} style={{ flex: 1 }} />

                <TextInput
                    placeholder="Confirm Password"
                    // secureTextEntry={true}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.footer}>
                <Button
                    label="SIGN UP"
                    styles={{ button: styles.primaryButton, label: styles.buttonWhiteText }}
                />
            </View>
            <View style={styles.signUpView}>
                <Text style={styles.signUpText}>Already have an account? <Text onPress={goBackHandler} style={styles.signUpText}> Log In</Text></Text>
            </View>

        </ScrollView>
    )
};

export default Signup;
import React from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.optionCard}>
                <Image></Image>
            </View>
            <View style={styles.optionCard1}>
                <Text>Hello1</Text>
            </View>
            <View style={styles.optionCard2}>
                <Text>Hello2</Text>
            </View>
            <View style={styles.optionCard3}>
                <Text>Hello3</Text>
            </View>

        </ScrollView>
    );
};

export default Home;
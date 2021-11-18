import React from 'react';
import { ScrollView, Text, View } from 'react-native';


import styles from './styles';
const Home = () => {

    return (

        <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>

            <View style={styles.flex_row}>
                <View style={styles.medium_title_box}>
                    <Text style={styles.medium_title} ellipsizeMode={'clip'}>
                        {'Home'}
                    </Text>
                </View>
            </View>

        </ScrollView>

    );
};

export default Home;

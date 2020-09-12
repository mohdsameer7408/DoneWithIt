import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';

function ImageScreen(props) {
    return (
        <View style={styles.conatiner}>
            <View style={styles.deleteButton}></View>
            <View style={styles.closeButton}></View>
            <Image resizeMode='contain' style={styles.viewImage} source={require('../assets/chair.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: colors.black,
    },
    closeButton: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 40,
        left: 30,
        backgroundColor: colors.primaryColor,
    },
    deleteButton: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 40,
        right: 30,
        backgroundColor: colors.secondaryColor,
    },
    viewImage: {
        width: '100%',
        height: '100%',
    },
})

export default ImageScreen;

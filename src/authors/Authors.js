import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AlphabetSelector from '../components/alphabetSelector/alphabetSelector';

export default function Authors() {
    return (
        <View style={styles.container}>
            <AlphabetSelector/>
            yoho
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF8EA',
        alignItems: 'center',
        justifyContent: 'center',
    }

});
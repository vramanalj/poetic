import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableHighlight,
    Animated,
    Easing,
  } from 'react-native';

export default function AlphabetSelector() {
    return (
        <View>
        <Text style={styles.text}>
            Test
        </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
      }
    }
)
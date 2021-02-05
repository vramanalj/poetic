import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Animated,
  Easing
} from 'react-native';

export default function App() {

    useEffect(() => {
        console.log("ComponentDidMount() Called.");
        // Animated.timing(
        //     fadeAnim,
        //     {
        //       toValue: 1,
        //       duration: 10000,
        //     }
        //   ).start();
    });
    

    return (
        <>
            <Animated.View style={styles.container}> 
                <Text h1 style={styles.appName}>Poetic</Text>
            </Animated.View> 
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFE74C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appName: {
        fontSize: 108,
        fontFamily: "Dancing Script",
        color: '#413B3B',
        textShadowColor: '#413B3B',
        textShadowOffset: { width: 0, height: 3 },
        textShadowRadius: 6
    }

});
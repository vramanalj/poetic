import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableHighlight,
    Animated,
    Easing,
    ScrollView
  } from 'react-native';
import {Button, ButtonGroup} from 'react-native-elements';
import {keyBy} from 'lodash';

export default function AlphabetSelector(props) {
    const [selectedIndex,setSelectedIndex] = useState(5);
    const alphabets = [...'abcdefghijklmnopqrstuvwxyz'];
    let buttonList = alphabets.map((alphabet) => { return alphabet.toUpperCase()});
    return (
        <ScrollView horizontal contentContainerStyle={styles.alphabetsContainer}>
            {
                <ButtonGroup
                onPress={(val)=>{
                    setSelectedIndex(val);
                    console.log('is this on?')
                    props.updateSelectedAlphabet(buttonList[val]);
                }
                }
                selectedIndex={selectedIndex}
                buttons={buttonList}
                buttonContainerStyle={styles.buttonStlye} 
                containerStyle={styles.buttonContainer}
                textStyle={styles.alphabet}
                selectedTextStyle={styles.selectedAlphabet}
                selectedButtonStyle={styles.selectedButton}/>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
        alphabetsContainer: {
            maxHeight: 120,
            alignItems: 'center',
            maxWidth:'100vw'
        },
        buttonStlye:{
            borderStyle: 'none',
            padding: '1.5rem'
        },
        selectedButton: {
        
        },
        buttonContainer: {
            backgroundColor:'transparent',
            borderStyle: 'none',
            overflow: 'visible'
        },
        alphabet:{
            fontSize: 24,
            fontFamily: "Dancing Script",
            fontWeight: 'Bold',
            color: '#413B3B',
            opacity:0.5
        },
        selectedAlphabet:{
            color: '#413B3B',
            textShadowColor: '#413B3B',
            textShadowOffset: { width: 0, height: 3 },
            textShadowRadius: 6,
            fontSize: 108,
            opacity:1
        }

    }
)
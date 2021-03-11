import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { ListItem } from 'react-native-elements'

import AlphabetSelector from '../components/alphabetSelector/alphabetSelector';

export default function Authors() {

    const [authors,setAuthors] = useState();
    const [selectedAlphabet, setSelectedAlphabet] = useState('P');

    useEffect(() => {
        console.log("Authors ComponentDidMount() Called.");
        axios.get('https://poetrydb.org/author').then((response)=>{
            console.log("Authors List: "+response.data.authors)
            setAuthors(response.data.authors);
        })
    },[]);

    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <AlphabetSelector updateSelectedAlphabet={setSelectedAlphabet}/>
            </View>
            <View style={styles.content}>
                {authors && authors.map((author, i) => (
                author.indexOf(selectedAlphabet)===0 &&
                <ListItem key={i} containerStyle={styles.listItemContainer} >
                    <ListItem.Content style={styles.listItem}>
                        <ListItem.Title style={styles.listText}>{author}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        backgroundColor: '#FFF8EA',
        alignItems: 'center',
    },
    heading : {
        flexBasis: 125
    },
    content: {
        display: 'flex',
        overflow: 'scroll',
        height: '100%',
        width: '100%'
    },
    listItemContainer: {
        width: '100%',
        backgroundColor: 'transparent',
        textAlign: 'center'
    },
    listItem:{
        alignItems: 'center'
    },
    listText: {
        fontSize: 24,
        fontFamily: "Dancing Script",
        color: '#413B3B',
    }

});
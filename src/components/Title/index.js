import React, { useState, useEffect } from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Title = ({ text }) => {
    const [stateText, setStateText] = useState('Default Title')

    useEffect(() => {
        console.log("Text Updated");
        setStateText(text);
    }, []);

    const onTextPress = () => {
        console.log("button pressed");
        setStateText("Updated!");
    }

    return (
        <Text onPress={onTextPress} style={styles.title}>{stateText}</Text>
    );
}

export default Title;
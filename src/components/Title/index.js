import React, { useState } from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Title = (props) => {
    const [text, setText] = useState('Default Title')

    const onTextPress = () => {
        setText("Updated!");
    }

    const onTextLongPress = () => {
        setText("Long Press!");
    }
    return (
        <Text onPress={onTextPress} onLongPress={onTextLongPress} style={styles.title}>{text}</Text>
    );
}

export default Title;
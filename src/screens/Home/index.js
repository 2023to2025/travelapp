import React, { useEffect, useState } from 'react';
import { 
    SafeAreaView, 
    View 
} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';

const Home = () => {
    const [title, setTitle] = useState('Default Title set in home');

    useEffect(() =>{
        setTimeout(() => {
            setTitle('New Text after timeout')
        }, 5000);
    });

    return(
        <SafeAreaView style={styles.flex}>
            <View>
                <Title text={title}/>
            </View>      
        </SafeAreaView>
    );
}

export default Home;
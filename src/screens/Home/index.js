import React from 'react';
import { 
    SafeAreaView, 
    View 
} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';

const Home = () => {
    return(
        <SafeAreaView style={styles.flex}>
            <View>
                <Title text='Title set in home'/>
            </View>      
        </SafeAreaView>
    );
}

export default Home;
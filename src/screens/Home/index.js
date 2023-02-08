import React, { useEffect, useState } from 'react';
import { 
    SafeAreaView, 
    View 
} from 'react-native';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';

const Home = () => {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Title text="Where do" style={{fontWeight: 'normal'}}/>
                <Title text="you want to go?"/>
                <Title text="Explore Attractions" style={styles.subTitle}/>
                <Categories selectedItem={'All'} categories={['All', 'Popular', 'Historical', 'Most Viewed', 'Trending', 'Random']}/>
            </View>      
        </SafeAreaView>
    );
}

export default Home;
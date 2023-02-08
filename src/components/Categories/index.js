import React from "react";
import {FlatList, Text, View} from 'react-native';
import styles from './styles';

const Categories = ({ categories, selectedItem }) => {
    console.log(categories);
    return (
        <FlatList 
            horizontal
            data={categories} 
            renderItem={({ item }) => {
                var selected = item === selectedItem;
                return (
                    <View style={[styles.categoryContainer, selected? styles.selectedCategoryContainer : {}]}>
                        <Text style={[styles.category, selected? styles.selectedCategory : {}]}>{item}</Text>
                    </View>
                )
            }}
        />
    );
};

export default Categories;
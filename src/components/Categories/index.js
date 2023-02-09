import React, { useState } from "react";
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Categories = ({ categories, selectedItem, onCategoryPress }) => {
    return (
        <FlatList 
            showsHorizontalScrollIndicator = {false}
            style = {{ marginRight: -32}}
            horizontal
            data={categories} 
            renderItem={({ item }) => {
                var selected = item === selectedItem;
                return (
                    <TouchableOpacity 
                        style={[styles.categoryContainer, selected? styles.selectedCategoryContainer : {}]}
                        onPress={() => onCategoryPress(item)}
                    >
                        <Text style={[styles.category, selected? styles.selectedCategory : {}]}>{item}</Text>
                    </TouchableOpacity>
                )
            }}
        />
    );
};

export default Categories;
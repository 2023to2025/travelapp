import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    category: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)',
        paddingVertical: 2,
    },
    selectedCategory: {
        fontWeight: 'bold',
        color: '#000000',
    },
    categoryContainer: {
        marginVertical: 14,
        marginRight: 17,

    },
    selectedCategoryContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
    }
});

export default styles;
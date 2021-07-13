import React from 'react'
import { View, StyleSheet } from 'react-native';

import { prefix }  from '../utils/constant';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    const { container, closeIcon, cartIcon } = styles;
    return (
        <View style={container}>
            <Ionicons style={closeIcon} name={`${prefix}-close`} size={30} color='white' />
            <Ionicons style={cartIcon} name={`${prefix}-cart`} size={30} color='white' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 38,
        paddingVertical: 20,
        marginBottom: 28
    },
    closeIcon: {
        fontSize: 45,
        color: 'white',
    },
    cartIcon: {
        color: 'white',
        fontSize: 30
    }
})

export default Header;
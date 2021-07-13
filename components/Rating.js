import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

import { prefix }  from '../utils/constant';
import { Ionicons } from '@expo/vector-icons';

const Rating = () => {
    const {container, star, rate, vote} = styles;
    return (
        <View style={container}>
            <Ionicons style={star} name={`${prefix}-star`}/>
            <Text style={rate}>4.8</Text>
            <Text style={vote}>(2578)</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 148,
        paddingHorizontal: 27,
        alignItems: 'center',
        marginTop: 20
    },
    star: {
        color: '#ffdd4f'
    }, 
    rate: {
        color: 'white',
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 16
    },
    vote: {
        color: 'white',
        opacity: 0.5,
        fontFamily: 'Montserrat-Black',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 14
    }
})

export default Rating;
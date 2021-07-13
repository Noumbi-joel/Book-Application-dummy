import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Action = () => {
    const {container, price, priceContent, preview, previewContent} = styles;
    return (
        <View style={container}>
            <TouchableOpacity style={price}>
                <Text style={priceContent}>19.99£</Text>
            </TouchableOpacity>
            <TouchableOpacity style={preview}>
                <Text style={previewContent}>Free Preview</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 251,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 27
    },
    price: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 48,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    priceContent: {
        fontFamily: 'Montserrat-Black',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 18
    },
    preview: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 48,
        backgroundColor: '#ef8262',
        color: 'white',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    previewContent: {
        color: 'white',
        fontFamily: 'Gilroy-Bold',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 16
    }
})

export default Action;
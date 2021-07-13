import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Title = ({title, customStyle, left}) => {
    const {container, bookTitle, leftAlign} = styles;
    const getStyle = () => left ? leftAlign : container;
    return (
        <View style={getStyle()}>
            <Text style={[bookTitle, customStyle]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookTitle: {
        color: 'white',
        fontFamily: 'GT-Sectra-Fine-Regular',
        fontSize: 30,
        fontWeight: '400',
        lineHeight: 30,
        marginTop: 40
    },
    leftAlign: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 30
    }
})

export default Title;
import React, { useState } from 'react'
import { Animated, StyleSheet, Text } from 'react-native'

const Animacion1 = () => {

    const [ animacion ] = useState(new Animated.Value(0))

    return (
        <Text style={styles.texto}>Animacion1</Text>
    )
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 20,
        textAlign:'center'
    }
});

export default Animacion1
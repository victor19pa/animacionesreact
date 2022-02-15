import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet, Text } from 'react-native'

const Animacion1 = () => {

    const [ animacion ] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 1, //valor que llega
                duration: 1000,
                useNativeDriver: true //valor de tiempo que tarda en llegar
            }
        ).start()//iniciar animacion
    }, [])
    return (
        <Animated.View
            style={{
                opacity: animacion
            }}
        >
            <Text style={styles.texto}>Animacion1</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 20,
        textAlign:'center'
    }
});

export default Animacion1
import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

const Animacion4 = () => {
    const [ animacion ] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 360, //valor que llega
                duration: 1000,
                useNativeDriver: false //valor de tiempo que tarda en llegar
            }
        ).start()//iniciar animacion
    }, [])

    const interpolacion = animacion.interpolate({
        inputRange: [0,360],
        outputRange: ['0deg', '360deg']
    })

    const estiloAnimacion = {
        transform: [{
            rotate: interpolacion
        }]
    }

    return (
        <View>
            <Animated.View
                style={[ styles.texto, estiloAnimacion]}
            >
                <Text>Interpolacion</Text>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    texto:{
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue',
        textAlign: 'center'
    }
});

export default Animacion4
import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

const Animacion3 = () => {
    const [ animacion ] = useState(new Animated.Value(14))

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 40, //valor que llega
                duration: 1000,
                useNativeDriver: false //valor de tiempo que tarda en llegar
            }
        ).start()//iniciar animacion
    }, [])
    return (
        <View>
            <Animated.Text
                style={[ styles.texto, { fontSize: animacion }]}
            >
                Animacion 3
            </Animated.Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 30,
        textAlign:'center'
    }
});

export default Animacion3
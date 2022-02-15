import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet, Text } from 'react-native'

const Animacion2 = () => {

    const [ animacion ] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 450, //valor que llega
                duration: 1000,
                useNativeDriver: false //valor de tiempo que tarda en llegar
            }
        ).start()//iniciar animacion
    }, [])
    return (
        <Animated.View
            style={[
                styles.caja,
                {
                    width: animacion,
                    height: animacion
                    //width: animacion
                }
            ]}
        >
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    caja:{
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
});

export default Animacion2
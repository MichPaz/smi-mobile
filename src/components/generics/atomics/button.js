import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Content, Button, Text } from 'native-base';

const styles = StyleSheet.create({
    button: {
        // height: 100,
        // width: '40px',
        backgroundColor: '#02273D',
        // borderRadius: 15
    }
})

function Atomic(props) {
    return (
        // <View
        //     style={styles.button}
        // >
        <Content>
            <Button
                // title={props.title}
                // transparent
                bordered
                dark
                full
                rounded
                onPress={props.onPress}
                accessibilityLabel={props.title}
            >
                <Text>
                    {props.title}
                </Text>
            </Button>
        </Content>
        // </View>
    )
}

export default Atomic
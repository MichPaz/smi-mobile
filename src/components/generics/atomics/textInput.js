import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

import { Item, Input, Label } from 'native-base';

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderWidth: 1.5,
        borderColor: '#02273D',
        margin: 10,
        fontSize: 16,
        padding: 10,
        borderRadius: 15
    }
})

function Atomic(props) {
    return (
        <View
            style={{marginBottom: 25, marginLeft: 30, marginRight: 30}}
        >
            <Item
                floatingLabel
            >
                <Label >
                    {props.label}
                </Label>
                <Input
                    placeholder={props.placeholder}
                >

                </Input>
            </Item>
        </View>
    )
}

export default Atomic
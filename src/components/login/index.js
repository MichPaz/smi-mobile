import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import TextInput from '../generics/atomics/textInput'
import Button from '../generics/atomics/button'


const styles = StyleSheet.create({
  backLogin: {
    flex: 1
  }
})


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <LinearGradient colors={['rgba(139,211,248,.3)', 'rgba(147,240,222,.3)', 'rgba(139,248,165,.3)']} style={styles.backLogin}>
      <View style={{ flex: 1 }}>
      </View>
      <View style={{ flex: 2, justifyContent: 'center', justifyContent: 'space-around' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TextInput
            label='E-mail'
            placeholder={'Digite seu E-mail'}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            label='Senha'
            placeholder={'Digite sua Senha'}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 3 }}>
            <Button
              title='Entrar'
            />
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
      </View>
    </LinearGradient>
  )
}

export default Login
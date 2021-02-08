import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

const Dashboard = ({ navigation }) => (
  <Background>
    <Header>Welcome Dashboard</Header>
    <Button
      mode="outlined"
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }],
        })
      }
    >
      Logout
    </Button>
  </Background>
)

export default Dashboard

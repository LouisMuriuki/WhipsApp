import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigation from './DrawerNavigation'

const AppNav = () => {
  return (
   <NavigationContainer>
    <DrawerNavigation/>
   </NavigationContainer>
  )
}

export default AppNav
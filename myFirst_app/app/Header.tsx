import { View, Text,StyleSheet } from 'react-native'
import React from 'react'


interface IHeader{
    left?:React.ReactNode;
    Center?:React.ReactNode;
    Right?:React.ReactNode
}

const Header = ({left,Center,Right}:IHeader) => {
  return (
    <View style={styles.Header} >
        {left ? left:<View/>}
        {Center?Center:<View/>}
        {Right?Right:<View/>}
    </View>
  )
}

const styles=StyleSheet.create({
    Header:{
        position: 'absolute',
        top:0,
        width:'100%',
        backgroundColor:'#f8f8f8',
        paddingVertical:10
    }
    
})

export default Header
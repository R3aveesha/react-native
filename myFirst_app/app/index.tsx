import { View, Text } from 'react-native'
import {Link, usePathname} from "expo-router"
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const index = () => {

  

  return (
    <View>
      <Text style={{
        color:"red",
        fontSize:27,
      }}>Index</Text>

      <View><MaterialIcons name="category" size={24} color="black" /><Link href={"/Category"}>Category</Link></View>
      
      <View><MaterialIcons name="production-quantity-limits" size={24} color="black" /><Link href={"/Products"}>Products</Link></View>

      <View><AntDesign name="home" size={24} color="black" /><Link href={"/Home"}>Home</Link></View>

      <View><AntDesign name="profile" size={24} color="black" /><Link href="/Profile">Profile</Link></View>

     
    </View>

  )
}

export default index
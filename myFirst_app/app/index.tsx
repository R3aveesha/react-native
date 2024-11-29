import { View, Text } from 'react-native'
import {Link, usePathname} from "expo-router"



const index = () => {

  

  return (
    <View>
      <Text style={{
        color:"red",
        fontSize:27,
      }}>Index</Text>

      <Link href={"/Category"}>Category</Link>
      <Link href={"/Product"}>Product</Link>
    </View>

  )
}

export default index
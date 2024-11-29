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
      <Link href={"/123"}>Product123</Link>

      <Link href={{
        pathname:"/[productId]",
        params:{
          productId:"auk",
          name:"raveesha",
          city:"kalutara"
        }
      }}>click here</Link>

      



    </View>

  )
}

export default index
import { View, Text } from 'react-native'
import {Link, usePathname} from "expo-router"



const index = () => {

  

  return (
    <View>
      <Text style={{
        color:"red",
        fontSize:27,
      }}>Index</Text>

      <button style={{padding:'10px',backgroundColor:"#2e4c64",border:"none",borderRadius:"100px"}}><Link href={"/Category"}>Category</Link></button>
      <button style={{padding:'10px',backgroundColor:"#4396d8",border:"none",borderRadius:"100px"}}><Link href={"/Product"}>Product</Link></button>
      <button style={{padding:'10px',backgroundColor:"#4396d8",border:"none",borderRadius:"100px"}}><Link href={"/123"}>Product123</Link></button>

      <Link href={{
        pathname:"/[productId]",
        params:{
          productId:"auk",
          name:"Amila",
          city:"wadduwa"
        }
      }}>click here</Link>



    </View>

  )
}

export default index
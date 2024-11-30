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
      <Link href={"/Products"}>Products</Link>
      <Link href={"../product/dww123"}>hello</Link>
      <Link href={"../product/dwdccm234235"}>hello2</Link>
      <Link href={"../product/kvwwr930913e"}>world2</Link>
    </View>

  )
}

export default index
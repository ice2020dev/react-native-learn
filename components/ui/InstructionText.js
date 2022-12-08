import {Text,StyleSheet}from 'react-native'
import Colors from '../../constants/Color'
function InstructionText({children,style}){
  return (
    <Text style={[styles.instructText,style]}>{children}</Text>
  )
}
export default InstructionText


const styles = StyleSheet.create({
    instructText:{
        color:Colors.accent500,
         fontSize:24
       },
})
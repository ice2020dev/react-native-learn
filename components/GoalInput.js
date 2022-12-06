import {TextInput,Button,StyleSheet,View} from 'react-native'
import {useState} from 'react'
function GoalInput(props){
    const [text,changeText] = useState('')

   function addGoal(){
      props.addGoal(text)
      changeText('')
    }
  return (
    <View style={styles.inputContainer}>
    <TextInput placeholder='请输入'  style={styles.input} value={text} onChangeText={changeText}/>
    <Button title="Asdd goal" onPress={addGoal}></Button>
   </View>
  )
}
export default GoalInput;
const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        flex:1
      },
      input:{
        width:'70%',
        marginRight:8,
        paddingVertical:8,
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:2,
        paddingHorizontal:8
      },
})

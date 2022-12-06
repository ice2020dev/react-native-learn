import {TextInput,Button,StyleSheet,View, Modal,Image} from 'react-native'
import {useState} from 'react'
function GoalInput(props){
    const [text,changeText] = useState('')

   function addGoal(){
      props.onAddGoal(text)
      changeText('')
    }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/images/goal.png')}/>
          <TextInput placeholder='请输入'  style={styles.input} value={text} onChangeText={changeText}/>
          <View style={styles.buttonContainer}>
            <Button  style={styles.button}  color='#a065ec' title="Add goal" onPress={addGoal}></Button>
            <Button  style={styles.button}  color='#a065ec' title="Cancel" onPress={props.onCancel}></Button>
          </View>
      </View>
     
    </Modal>
   
  )
}
export default GoalInput;
const styles = StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:16,
        flex:1,
        backgroundColor:'#311b6b'
      },
      image:{
        width:100,
        height:100,
        marginBottom:10
      },
      input:{
        width:'100%',
        marginRight:8,
        paddingVertical:8,
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:2,
        paddingHorizontal:8,
        color:'#fff'
      },
      buttonContainer:{
        marginTop:16,
        flexDirection:'row'
      },
      button:{
        width:100,
        marginHorizontal:18
      }
})

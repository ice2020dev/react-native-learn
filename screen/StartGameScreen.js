import { useState } from "react"
import { TextInput,View ,StyleSheet, Alert,Text} from "react-native"
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from "../components/ui/Title"
import Colors  from "../constants/Color"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
function StartGameScreen({onPicNumber}){
    const [enterText,SetEntertext] = useState('')
    function handleInputHandler(enterText){
        SetEntertext(enterText)
    }
    function resetInputHandler(){
        SetEntertext('')
    }
    
    function confirmInputHandle(){
      const chosenNumber = parseInt(enterText)
      if(isNaN(chosenNumber) || 0>= chosenNumber || 99<chosenNumber){
        Alert.alert('Invalid Number','Number has to be a number between 1 and 99',[{
            text:'okay',style:'destructive',onPress: resetInputHandler}])
            return;
      }
      onPicNumber(enterText)
    }
  return (
    <View style={styles.rootContainer}>
        <Title style={styles.instructText}>Guess My Number</Title>
        <Card >
            <InstructionText >Enter a Number</InstructionText>
            <TextInput style={styles.numberInput} autoCapitalize="none" autoCorrect={false} value={enterText} onChangeText={handleInputHandler} maxLength={2} keyboardType="number-pad"></TextInput>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandle}>Confirm</PrimaryButton>
                </View>
                
            </View>
        </Card>
    </View>
  )
}
export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:"center",
    },
   inputContainer:{
    alignItems:"center",
    marginTop:36,
    marginHorizontal:16,
    padding:16,
    backgroundColor:Colors.primary800,
    borderRadius:8,
    elevation:4,//android
    shadowColor:'black',
    shadowOffset:{width:0,height:2}
   },
 
   numberInput:{
    width:50,
    height:50,
    textAlign:"center",
    fontSize:32,
    color:Colors.accent500,
    borderBottomColor:Colors.accent500,
    borderBottomWidth:2,
    // fontWeight:'bold',
    fontFamily:'open-sans-bold',
    marginVertical:8
   },
   buttonsContainer:{
    flexDirection:'row'
   },
   buttonContainer:{
     flex:1
   }
})
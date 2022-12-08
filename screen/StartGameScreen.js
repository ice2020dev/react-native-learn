import { useState } from "react"
import { TextInput,View ,StyleSheet, Alert,useWindowDimensions,KeyboardAvoidingView, ScrollView} from "react-native"
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
    const {width,height} = useWindowDimensions()
    const marginTopDistance = height<580 ? 30 : 100
  return (
    <ScrollView  style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
    <View style={[styles.rootContainer,{marginTop:marginTopDistance}]}>
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
    </KeyboardAvoidingView>
    </ScrollView>
  )
}
export default StartGameScreen

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  rootContainer:{
        flex:1,
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
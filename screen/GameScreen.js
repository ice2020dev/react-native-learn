import {View,Text,StyleSheet, Alert, FlatList} from 'react-native'
import { useEffect, useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import InstructionText from '../components/ui/InstructionText'
import Card from '../components/ui/Card'
import GuessLogItem from '../components/game/GuessLogItem'
function generateRamdomBetween(min,max,exclude){
    const rdnNum = Math.floor(Math.random()*(max-min))+min
    if(rdnNum===exclude){
      return generateRamdomBetween(min,max,exclude)
    }else {
     return rdnNum
    }
 }
 let minBoundary = 1
 let maxBoundary = 100
function GameScreen({userNumber,onGameOver}){
    const initialGuess = generateRamdomBetween(1,100,userNumber)
    const [currentGuess,setCurrentGuess] = useState(initialGuess)
    const [roundGuess,setRoundGuess] = useState([])

    useEffect(()=>{
        if(currentGuess==userNumber){
            onGameOver(roundGuess.length)
        }
    },[currentGuess,userNumber,onGameOver])
    useEffect(()=>{
        minBoundary = 1
        maxBoundary = 100
    },[])
    function nextGuessHandler(direction){
        // 防止用户作弊
        if((direction==='lower' && currentGuess<userNumber )|| (direction==='greater' && currentGuess>userNumber )){
           Alert.alert('Do not lie','you know this is wrong',{
             text:'Sorry!',style:'cancel',
           })
           return
        }
        if(direction==='lower'){
            maxBoundary=currentGuess
        }else{
            minBoundary=currentGuess+1
        }
        console.log(minBoundary,maxBoundary)
        let newRndNum=generateRamdomBetween(minBoundary,maxBoundary,currentGuess)
        setCurrentGuess(newRndNum)
        setRoundGuess((previousGuess)=>{
            return [newRndNum,...previousGuess]
        })
    }
    const guessRoundListLength = roundGuess.length
    return (
        <View style={styles.rootScreen}>
            <Title>Opponents'Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card >
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton style={styles.buttonContainer} onPress={nextGuessHandler.bind(this,'lower')}>
                            <Ionicons name="md-remove" size={24} color='white'/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton style={styles.buttonContainer} onPress={nextGuessHandler.bind(this,'greater')}>
                          <Ionicons name="md-add" size={24} color='white'/>
                        </PrimaryButton>
                    </View>
                    
                </View>
                
            </Card>
            <View style={styles.itemContainer}>
                <FlatList
                data={roundGuess}
                renderItem={(itemData)=><GuessLogItem guessRound={guessRoundListLength-itemData.index}  guessNumber={itemData.item}></GuessLogItem>}
                keyExtractor={(item)=>item}
                ></FlatList>
            </View>
        </View>
    )
}
export default  GameScreen

const styles = StyleSheet.create({
    rootScreen:{
        flex:1,
        padding:16
    },
    instructionText:{
        marginBottom:12
    },
    buttonsContainer:{
        flexDirection:'row'
       },
       buttonContainer:{
         flex:1
     },
     itemContainer:{
        flex:1,
        padding:16
     }
})
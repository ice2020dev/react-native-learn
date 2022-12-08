import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet ,ImageBackground,SafeAreaView} from 'react-native';
import  {LinearGradient} from 'expo-linear-gradient'
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'
import StartGameScreen  from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import GameOver from './screen/GameOverScreen'
import Colors from './constants/Color';

export default function App() {
  const [userNumber,setUserNumber] = useState()
  const [gameIsOver,setGameIsOver] = useState(true)
  const [guessRound,setGuessRound] = useState(0)

  const [fontLoaded] = useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
  // 字体还未加载完成，就显示apploading页面
  if(!fontLoaded){
     return <AppLoading/>
  }
  function pickNumHandler(enterText){
    setUserNumber(enterText)
    setGameIsOver(false)
  }
  function gameOverHandler(numberOfRound){
    setGameIsOver(true)
    setGuessRound(numberOfRound)
  }
  function startGameHandler(){
    setUserNumber(null)
  }
  let screen = <StartGameScreen onPicNumber={pickNumHandler}/>;
  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if(gameIsOver && userNumber){
    screen=<GameOver userNumber={userNumber} guessRound={guessRound} onStartGame={startGameHandler}/>
  }
  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={
      styles.rootScreen
    }>
      <ImageBackground source={require('./assets/images/background.png')} imageStyle={styles.backgroundImage} style={styles.rootScreen} resizeMode="cover">
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>  
      </ImageBackground>  
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
   flex:1,
  //  backgroundColor:'#ddb52f'
  },
 backgroundImage:{
  opacity:0.15,
 }
 
 
  
});

import {View,Text,StyleSheet, Pressable} from 'react-native'
import  Colors from '../../constants/Color'
function PrimaryButton({children,onPress}){
  return (
    <View style={styles.buttonOuterContainer}>
        <Pressable onPress={onPress} style={({pressed})=>pressed ? [styles.pressed,styles.buttonInterContainer] : styles.buttonInterContainer} android_ripple={{color:Colors.primary600}}>
        <Text style={styles.buttonText}>{children}</Text>
        </Pressable>     
    </View>
  )
}
export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'
    },
    buttonInterContainer:{
        paddingHorizontal:16,
        paddingVertical:8,
        backgroundColor:Colors.primary500,
        elevation:2
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    pressed:{
        opacity:0.75
    }
})
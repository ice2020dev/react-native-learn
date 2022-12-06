import {View,Text,StyleSheet,Pressable} from 'react-native'

function GoalItem(props){
    return (
        <View style={styles.goalItem}>
          <Pressable 
          onPress={props.goalDelete.bind(this,props.id)} 
          android_ripple={{color:'#210644'}}
          style={(({pressed})=>pressed && styles.pressedItem)}
          >
           <Text style={styles.goalText}>{props.text}</Text>
          </Pressable>
        </View>
      )
}
export default GoalItem

const styles = StyleSheet.create({
    goalItem:{
        backgroundColor:'#5e0acc',
        margin:8,
        borderRadius:6
      },
      goalText:{
        color:'#fff',
        padding:8,
      },
      pressedItem:{
        opacity:0.5
      }
})
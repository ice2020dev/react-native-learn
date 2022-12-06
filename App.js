import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
export default function App() {
  const [goals,setList] = useState([])
  function addGoal(goalText){
    setList(goals=>[...goals,{text:goalText,id:Math.random().toString()}])
  }
  return (
    <View style={styles.container}>  
      <GoalInput addGoal={addGoal}></GoalInput>
      <View style={styles.lists}>
      <FlatList data={goals} renderItem={(itemData)=>{
        return (
          <GoalItem text={itemData.item.text}></GoalItem>
        )
      }}  
        keyExtractor={(item,index)=>{
          return item.id
        }}
      />         
      </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop:50,
   paddingHorizontal:16,
   flex:1
  },
 
  lists:{
    flex:6,
    borderTopColor:'#ccc',
    borderTopWidth:1
  },
 
  
});

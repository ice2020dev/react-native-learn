import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
export default function App() {
  const [isModalVisible,setModalVisible] = useState(false)
  const [goals,setList] = useState([])
  // 弹窗里的add
  function addGoal(goalText){
    setList(goals=>[...goals,{text:goalText,id:Math.random().toString()}])
    endAddGoalHandle()
  }
  function deleteGoal(id){
    setList((previousGoals)=>{
      return previousGoals.filter(item=>item.id!=id)
    })
  }
  function AddNewGoal(){
    setModalVisible(true)
  }
  function endAddGoalHandle(){
    setModalVisible(false)
  }
  return (
    <View style={styles.container}>  
      <Button title="Add New Goal" color='#a065ec' onPress={AddNewGoal}></Button>
      { isModalVisible &&  <GoalInput visible={isModalVisible} onAddGoal={addGoal} onCancel={endAddGoalHandle}></GoalInput> }
     
      <View style={styles.lists}>
      <FlatList data={goals} renderItem={(itemData)=>{
        return (
          <GoalItem text={itemData.item.text} id={itemData.item.id} goalDelete={deleteGoal}></GoalItem>
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
   flex:1,
   backgroundColor:'#311b6b'
  },
 
  lists:{
    flex:6,
    // borderTopColor:'#ccc',
    // borderTopWidth:1
  },
 
  
});

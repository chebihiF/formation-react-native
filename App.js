import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';


export default function App() {
  
  
  const [courseGoals, setCourseGoals] = useState([])
  const [modelVisible, setModelVisible] = useState(false)

  const addGoalHandler = (enterGoalText) => {
    setCourseGoals(currentCourseGoals => [...courseGoals, {text:enterGoalText, id: Math.random().toString()}])
    endAddGoalHandler()
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals => {
      return courseGoals.filter((goal)=> goal.id !== id)
    })
  }

  const startAddGoalHandler = () => {
    setModelVisible(true)
  }

  const endAddGoalHandler = () => {
    setModelVisible(false)
  }

  
  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler}/>
      {modelVisible && <GoalInput visible={modelVisible} OnAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData)=>{
            return(<GoalItem 
                    text={itemData.item.text} 
                    id={itemData.item.id}
                    onDeleteItem={deleteGoalHandler} />)    
          }}
          keyExtractor={(item,index)=>{
            return item.id
          }}
          >
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1
  },
  
  goalsContainer: {
    flex: 5
  },
  
});

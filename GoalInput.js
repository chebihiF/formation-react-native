import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native'
import { useState } from 'react';

function GoalInput(props){
    const [enterGoalText, setEnterGoalText] = useState('')
    
    const goalInputHandler = (enterdText) => {
        setEnterGoalText(enterdText)
      }

    const addGoalHandler = () => {
        props.OnAddGoal(enterGoalText)
        setEnterGoalText('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('./assets/images/splash.png')} />
                <TextInput  style={styles.textInput} 
                            placeholder='your course goal!' 
                            onChangeText={goalInputHandler}
                            value = {enterGoalText}
                            />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b'
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#ccc',
        width: '90%',
        padding: 8
      },
      buttonContainer : {
          marginTop: 16,
        flexDirection: 'row',
      },
      button: {
          width: '40%',
          marginHorizontal: 8
      },
      image:{
          width: 100,
          height: 100,
          margin: 20
      }
});
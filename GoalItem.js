import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props) {
    return (
        <Pressable 
            android_ripple={{color: '#210644'}} 
            onPress= {()=>{props.onDeleteItem(props.id)}} 
            style = {({pressed}) => pressed && styles.pressedItem}
            > 
            <View >
                <Text style={styles.goalItem}>{props.text}</Text>
            </View>
        </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
      },
      pressedItem:{
          color: '#210644'
      }
});
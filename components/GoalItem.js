import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{color:"black"}} onPress={props.onDeleteItem.bind(this, props.id)}
      style={({pressed})=>pressed && styles.pressedItem}>
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#A0A0A0",
  },
  pressedItem:{opacity:0.5},
  text: {
    color: "white",
  },
});

import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modal, setModal] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function addGoalHandler() {
    setCourseGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText("");
    setModal(false);
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function deleteGoal(id) {
    setCourseGoals((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="auto"/>
    <View style={styles.appContainer}>
      <Button
        title="Add Goal"
        color="#00994c"
        onPress={() => {
          setModal(!modal);
        }}
      />
      <Modal visible={modal} animationType="slide">
        <View style={styles.inputContainer}>
          <Image
            source={require("./assests/images/goal.png")}
            style={styles.bgImage}
          />
          <TextInput
            style={styles.textInput}
            placeholder="your goal"
            onChangeText={goalInputHandler}
            value={enteredGoalText}

          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add" onPress={addGoalHandler} color={'#00994c'}/>
            </View>
            <View style={styles.button}>
              <Button
                title="Cancel"
                color={"red"}
                onPress={() => {
                  setModal(!modal);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoal}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 20,
  },

  goalsContainer: {
    flex: 6,
  },
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#A0A0A0",
   
  },
  bgImage: { width: 100, height: 100, margin: 20 },
  textInput: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#ffffff",
    padding: 8,
    borderRadius:6,
    color:"white"
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    margin: 8,
  },
});

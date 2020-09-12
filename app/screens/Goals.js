import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, StatusBar, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import AddGoal from './AddGoal';

function Goal() {

    const [courseGoals, setCourseGoals] = useState([]);
    const [visibility, setVisibility] = useState(false);

    const addGoal = goal => {
        setVisibility(false)
        setCourseGoals(currentGoals => [...currentGoals, goal]);
    }

    const deleteGoal = (id) => {
        const goals = [...courseGoals];
        const newGoalsList = goals.filter(goal => goal.id !== id);
        setCourseGoals(newGoalsList);
    }

    const handleVisibility = () => {
        setVisibility(prevVisibility => !prevVisibility);
    }

    return (
        <View style={styles.container}>
            <AddGoal addGoal={addGoal} visibility={visibility} handleVisibility={handleVisibility} />
            <FlatList
                style={courseGoals.length > 0 ? styles.goals : {}}
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                renderItem={courseGoal => (<TouchableOpacity onPress={() => deleteGoal(courseGoal.item.id)}><Text style={styles.goal}>{courseGoal.item.id}. {courseGoal.item.name}</Text></TouchableOpacity>)} />
            <Button title='Add A Goal' onPress={handleVisibility} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: StatusBar.currentHeight + 10,
    },
    goals: {
        marginVertical: 30,
        padding: 20,
        borderColor: '#000',
        borderWidth: 2,
    },
    goal: {
        paddingVertical: 20,
        fontSize: 20,
    }
})


export default Goal;
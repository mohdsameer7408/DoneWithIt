import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';

const AddGoal = (props) => {

    const [goal, setGoal] = useState({ id: '1', name: '' });

    const handleInput = (name) => {
        setGoal({ ...goal, name });
    }

    const addAndResetGoalHandler = () => {
        props.addGoal(goal);
        setGoal(prevGoal => ({ id: `${parseInt(prevGoal.id) + 1}`, name: '' }));
    }

    return (
        <Modal visible={props.visibility} animationType='slide'>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Enter a goal' onChangeText={handleInput} value={goal.name} />
                <View style={styles.buttonContainer}>
                    <View style={styles.btn}>
                        <Button title='CANCEL' color='red' onPress={props.handleVisibility} />
                    </View>
                    <View style={styles.btn}>
                        <Button style={styles.btn} title='ADD' onPress={addAndResetGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        marginVertical: 10,
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btn: {
        width: '40%',
    },
});

export default AddGoal;
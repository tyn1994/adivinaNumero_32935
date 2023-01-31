import { Alert, Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { Card, NumberContainer } from "../../components";
import React, { useState } from "react";

import { colors } from "../../constants";
import { styles } from "./styles";

export const StartGame = ({onHandlerStartGame}) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);

    const onHandlerChange = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ""));
    }

    const onHandlerReset = () => {
        setEnteredValue("");
        setConfirmed(false);
    }

    const onHandlerConfirm = () => {
        const chosenNumber = parseInt(enteredValue, 10);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Número inválido', 'El número requiere estar entre 1 y 99', [{ text: 'OK', style: "destructive", onPress: onHandlerReset }]);
        } else {
            setConfirmed(true);
            setSelectedNumber(chosenNumber);
            setEnteredValue("");
            Keyboard.dismiss();
        }
    }

    const onHandleStartGame = () => {
        onHandlerStartGame(selectedNumber);
    };

    const Confirmed = () => confirmed ? (
        <Card style={styles.confirmedContainer}>
            <Text style={styles.confirmedTitle}>Número seleccionado</Text>
            <NumberContainer number={selectedNumber}></NumberContainer>
            <Button title="Iniciar juego" onPress={onHandleStartGame} color={colors.primary}/>
        </Card>
    ) : null;

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>Comenzar juego</Text>
                <Card style={styles.inputContiner}>
                    <Text style={styles.label}>Escribe un número</Text>
                    <TextInput
                        value={enteredValue}
                        keyboardType="numeric"
                        style={styles.input}
                        placeholder="0"
                        onChangeText={onHandlerChange}
                        maxLength={2} />
                    <View style={styles.buttonContiner}>
                        <Button title="Reiniciar" onPress={onHandlerReset} color={colors.secondary} />
                        <Button title="Confirmar" onPress={onHandlerConfirm} color={colors.primary} />
                    </View>
                </Card>
                <Confirmed />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame;
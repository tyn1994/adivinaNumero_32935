import { Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";

import { Card } from "../../components";
import { colors } from "../../constants";
import { styles } from "./styles";

export const StartGame = () => {
    const [enteredValue, setEnteredValue] = useState("");

    const onHandlerChange = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ""));
    }


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
                        <Button title="Reiniciar" onPress={() => null} color={colors.secondary} />
                        <Button title="Confirmar" onPress={() => null} color={colors.primary} />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame;
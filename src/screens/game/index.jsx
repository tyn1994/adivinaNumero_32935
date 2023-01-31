import { Button, Text, View } from "react-native";
import { Card, NumberContainer } from "../../components";
import React, { useState } from "react";

import { colors } from "../../constants";
import { styles } from "./styles";

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
}

const Game = ({ selectedNumber }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber))
    return (
        <View style={styles.container}>
            <Card style={styles.content}>
                <Text style={styles.title}>Número del oponente</Text>
                <NumberContainer number={currentGuess} />
                <View style={styles.buttonContainer}>
                    <Button title="Menor" onPress={() => null} color={colors.primary} />
                    <Button title="Mayor" onPress={() => null} color={colors.primary} />
                </View>
            </Card>
        </View>
    )
}

export default Game;
import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const style = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        color: colors.white
    }
})
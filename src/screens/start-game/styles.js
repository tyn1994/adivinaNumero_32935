import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        color: colors.text,
        textAlign: "center",
        paddingVertical: 20,
        fontFamily: 'Montserrat-Bold',
    },
    inputContiner: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
    },
    label: {
        fontSize: 15,
        color: colors.text,
        paddingVertical: 5,
        textAlign: "center",
        fontFamily: 'Montserrat-Regular',
    },
    input: {
        width: "100%",
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: "center",
        fontFamily: 'Montserrat-Regular',
    },
    buttonContiner: {
        flexDirection: "row",
        width: "75%",
        justifyContent: "space-around",
        marginTop: 20,
    },
    confirmedContainer: {
        width: "70%",
        height: 180,
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 30
    },
    confirmedTitle: {
        fontSize: 16
    },
})
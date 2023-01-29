import { Text, View } from "react-native";

import React from "react";
import { style } from "./styles";

const Header = ({ title }) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>
        </View>
    );
};

export default Header;

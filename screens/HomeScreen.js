import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {

    const navigation = useNavigation();
    return (
        <View>
            <Text>HOMESCREEN HELLO</Text>
            <Button title="Direct Messages" onPress={() => navigation.navigate("Messages")}/>
        </View>
    )
}

export default HomeScreen
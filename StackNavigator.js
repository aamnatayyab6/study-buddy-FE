import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MessagesScreen from "./screens/MessagesScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const user = true;

    return (
        <Stack.Navigator>
            {user ? (
                <>
                    <Stack.Screen name="Login" component={LoginScreen}/>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Messages" component={MessagesScreen}/>
                </>
            ) : (
                <Stack.Screen name="Login" component={LoginScreen}/>
            )} 
        </Stack.Navigator>
    )
}

export default StackNavigator
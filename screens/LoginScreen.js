import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import useAuth from '../hooks/useAuth'
import tailwind from "tailwind-rn"

const LoginScreen = () => {
  const {user} = useAuth();

  const navigation = useNavigation();

  console.log(user);

  return (
    <View style={tailwind("flex-1")}>
      <ImageBackground
        resizeMode="cover"
        style={tailwind("flex-1")}
        // source={{ uri: "https://tinder.com/static/tinder.png" }}s
      >
        <TouchableOpacity
          style={[
            tailwind("absolute bottom-40 w-52 bg-white p-4 rounded-2xl"),
            { marginHorizontal: "25%" },
          ]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={tailwind("font-semibold text-center")}>
            Sign in & get swipping
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default LoginScreen
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={Main} name="Добро пожаловать" options={{headerShown: false}} />
            <Stack.Screen component={HomeScreen} name="Куда поехать" options={{headerBackVisible: false}} />
            <Stack.Screen component={FullScreen} name="FullScreen" options={{headerShown: false}} />
        </Stack.Navigator>
    );
}
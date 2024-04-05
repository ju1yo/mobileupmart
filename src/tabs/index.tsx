import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabIcon from "./tabscomponentes/TabIcon";
import { Image } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Home from "./Home";
import Historico from "./Historico";
import Comprar from "./Comprar";
import Carteira from "./Carteira";
import { design } from "../estilos/temas";
import { View } from "native-base";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <View style={{ flex: 1, backgroundColor: design.colors.gray[700]}}>
    <Tab.Navigator
    screenOptions={{
        tabBarStyle: { 
            backgroundColor: design.colors.gray[900], 
            width: "100%", 
            height: "14%", 
            borderTopLeftRadius: 30, 
            borderTopEndRadius: 30,
            borderColor: design.colors.gray[900],
            },
        }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              source={require("./icons/homeicon.png")}
              focused={focused}
            />
          ),
          tabBarLabel: "",
        })}
      />

      <Tab.Screen 
        name="Historico" 
        component={Historico} 
        options={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon
                source={require("./icons/historicoicon.png")}
                focused={focused}
                />
            ),
            tabBarLabel: "",
          })}
        />

      <Tab.Screen 
        name="Comprar" 
        component={Comprar}
        options={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon
                source={require("./icons/compraricon.png")}
                focused={focused}
                />
            ),
            tabBarLabel: "",
          })}
        /> 

      <Tab.Screen 
        name="Carteira" 
        component={Carteira} 
        options={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon
                source={require("./icons/carteiraicon.png")}
                focused={focused}
                />
            ),
            tabBarLabel: "",
          })}
        /> 

    </Tab.Navigator>
    </View>
  );
}
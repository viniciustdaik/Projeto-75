import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Alugue uma Bicicleta") {
                iconName = "bicycle";
                size = size - 0.5;
              } else if (route.name === "Histórico de Locações") {
                iconName = "time";
                size = size - 1.5;
              }

              // Você pode retornar qualquer componente que quiser aqui!
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }, 
            //project but in screenoptions
            //"tabBarActiveTintColor": 'orange', 
            //"tabBarInactiveTintColor": 'red', 
            //"showLabel": true, 
            /*"tabBarActiveTintColor": "#FBE5C0",
            "tabBarInactiveTintColor": "black",*/
            /*"tabBarLabelStyle": {
              "fontSize": 20,
              "fontFamily": "Rajdhani_600SemiBold"
            },
            "tabBarItemStyle": {
              "alignItems": "center",
              "justifyContent": "center"
            },
            "tabBarLabelPosition": "below-icon",*/
            "tabBarStyle": [
              {
                "display": "flex", 
                //"paddingBottom": 5, 
                //"paddingTop": 0, 
                "backgroundColor": 'darkblue', 
                "borderTopColor": 'transparent', 
              },
              null
            ]
          })}
          tabBarOptions={{
            activeTintColor: "orange",
            inactiveTintColor: "red",
            style: {
              borderTopWidth: 0,
            },
            labelStyle: {
              fontSize: 20,
              fontFamily: "Rajdhani_600SemiBold"
            },
            labelPosition: "below-icon",
            tabStyle: {
              display: "flex", 
              alignItems: "center",
              justifyContent: "center", 
              backgroundColor: 'darkblue', 
              borderTopColor: 'transparent', 
            }
          }}
          
        >
          <Tab.Screen name="Alugue uma Bicicleta" component={RideScreen} />
          <Tab.Screen name="Histórico de Locações" component={RideHistoryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

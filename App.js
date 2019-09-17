import React from 'react';
import { Platform,StyleSheet, Text, View,  } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import App from './src/Home'
import Other from './src/Other'
import Profile from './src/Profile'


const typeMobile = Platform.OS === 'ios' ? 'ios' : 'md';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: App,
        navigationOptions: {
            tabBarIcon: ({focused, horizontal, tintColor }) => (<Icon name={typeMobile + "-home"} size={24}/>)            

        }
    },
    Search: {
        screen: Other,
        navigationOptions: {
            tabBarIcon: ({focused, horizontal, tintColor }) => (<Icon name={typeMobile + "-search"} size={24}/>)            

        }
    },
    Galeria: {
        screen: Other,
        navigationOptions: {
            tabBarIcon: ({focused, horizontal, tintColor }) => (<Icon name={typeMobile + "-add"} size={24}/>)            

        }
    },
    Like: {
        screen: Other,
        navigationOptions: {
            tabBarIcon: ({focused, horizontal, tintColor }) => (<Icon name={typeMobile + "-heart-empty"} size={24}/>)            

        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({focused, horizontal, tintColor }) => (<Icon name={typeMobile + "-person"} size={24}/>)            

        }
    }
},{
    tabBarOptions: { showLabel: false }
} 
);



export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

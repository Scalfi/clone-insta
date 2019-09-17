import React, { useState, useEffect, useCallback } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import logo from './imagens/instagram.png';

import { createAppContainer } from 'react-navigation';
import IconIonic from 'react-native-vector-icons/Ionicons'
import { Container, Content, Thumbnail } from 'native-base'
import CardComponent from './Components/Card';


const typeMobile = Platform.OS === 'ios' ? 'ios' : 'md';

export class App extends React.Component {


    render() {



        return (
            <Container style={{padding:5}}>
                <Content>
                    <View style={{ fex: 3, paddingTop: 2 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', paddingStart: 5, paddingEnd: 5 }}>
                            <View style={{alignItems: 'center'}}>
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'orange', borderWidth: 2 }} source={require('./imagens/me.png')} />
                                <Text style={{ alignItems: 'center', marginHorizontal: 5 }}>Your Story</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'orange', borderWidth: 2 }} source={require('./imagens/me.png')} />
                                <Text style={{ alignItems: 'center', marginHorizontal: 8 }}>Fulano</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'orange', borderWidth: 2 }} source={require('./imagens/me.png')} />
                                <Text style={{ alignItems: 'center', marginHorizontal: 8 }}>Fulano</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'orange', borderWidth: 2 }} source={require('./imagens/me.png')} />
                                <Text style={{ alignItems: 'center', marginHorizontal: 8 }}>Fulano</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'orange', borderWidth: 2 }} source={require('./imagens/me.png')} />
                                <Text style={{ alignItems: 'center', marginHorizontal: 8 }}>Fulano</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'orange', borderWidth: 2 }} source={require('./imagens/me.png')} />
                                <Text style={{ alignItems: 'center', marginHorizontal: 8 }}>Fulano</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'orange', borderWidth: 2 }} source={require('./imagens/me.png')} />
                                <Text style={{ alignItems: 'center', marginHorizontal: 8 }}>Fulano</Text>
                            </View>

                        </ScrollView>
                    </View>
                    <CardComponent imageSource="1" Name="Luis" />
                    <CardComponent imageSource="2" Name="Scalfi" />
                    <CardComponent imageSource="3" Name="Julieta" />
                </Content>
            </Container>
        );
    }
}

const stackNavigator = createStackNavigator({
    App,
}, {
        headerLayoutPreset: 'center',
        defaultNavigationOptions: {
            headerLeft: <IconIonic name={typeMobile + "-camera"} style={{ paddingLeft: 10 }} size={24} />,
            headerTitle: <Image source={logo} />,
            headerStyle: {
                backgroundColor: '#f5f5f5'
            },
            headerRight: <IconIonic name={typeMobile + "-paper-plane"} style={{ paddingRight: 10 }} size={24} />,

        },

    })

export default createAppContainer(stackNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
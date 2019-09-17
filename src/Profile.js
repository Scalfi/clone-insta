import React, { useState, useEffect, useCallback } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import logo from './imagens/instagram.png';

import { createAppContainer } from 'react-navigation';
import IconIonic from 'react-native-vector-icons/Ionicons'
import { Container, Content, Thumbnail, Button, } from 'native-base'
import CardComponent from './Components/Card';

var images = [
    require('./imagens/1.jpeg'),
    require('./imagens/2.jpeg'),
    require('./imagens/3.jpeg'),
    require('./imagens/4.jpeg'),
    require('./imagens/1.jpeg'),
    require('./imagens/2.jpeg'),
    require('./imagens/3.jpeg'),
    require('./imagens/4.jpeg'),
    require('./imagens/1.jpeg'),
    require('./imagens/2.jpeg'),
    require('./imagens/3.jpeg'),
    require('./imagens/4.jpeg'),
]

var {width,height} = Dimensions.get('window')
const typeMobile = Platform.OS === 'ios' ? 'ios' : 'md';

export class Profile extends React.Component {
    renderSectionFoto = () => {
        return images.map((image,index) =>{
            return (
                <View key={index} style={[{width: (width)/ 3},{height: (width)/3}
                ,{marginBottom:2}, index % 3 !== 0 ? {paddingLeft:2} : {paddingLeft:0}
                ]}>
                    <Image style={{flex:1,width:undefined,height:undefined}}
                    source={image}/>
                </View>
            )

        })
    }
    renderSection = () => {
        return (
            <View style={{flexDirection: 'row',flexWrap:'wrap'}}>
                {this.renderSectionFoto()}
            </View>
        )
    }
    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: 'white' }}>
                <Content>
                    <View style={{ paddingTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignContent: 'center' }} >

                            <View style={{ flex: 1, paddingLeft: 10 }}>
                                <Image source={require('./imagens/me.png')} style={{ width: 75, height: 75, borderRadius: 37.5, }} />

                            </View>
                            <View style={{ flex: 3 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View style={{ }}>
                                        <Text>20</Text>
                                        <Text style={{ fontSize: 10, color: 'grey' }}>posts</Text>
                                    </View>
                                    <View style={{ }}>
                                        <Text>200</Text>
                                        <Text style={{ fontSize: 10, color: 'grey' }}>seguidores</Text>
                                    </View>
                                    <View style={{ }}>
                                        <Text>212</Text>
                                        <Text style={{ fontSize: 10, color: 'grey' }}>seguindo</Text>
                                    </View>
                                </View>
                        
                            </View>
                        </View>
                        <View style={{paddingBottom:10, paddingHorizontal: 10}}>
                            <Text>Gabriel Scalfi</Text>
                            <Text>Facebook: Gabriel Scalfi</Text>
                        </View>
                        <View style={{ flexDirection: 'row' ,padding:5, paddingRight: 10}} >
                            <Button bordered dark style={{ flex: 2, marginLeft: 10, justifyContent: 'center', height: 30 }}>
                                <Text> Editar Perfil</Text>
                            </Button>
                        </View>
                        <View style={{ fex: 3, paddingTop: 10 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{  paddingStart: 5, paddingEnd: 5 }}>
                            <View style={{alignItems: 'center '}}>
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'black', borderWidth: 2 }} source={require('./imagens/download.png')} />
                                <Text style={{  marginHorizontal: 5 }}>Nova</Text>
                            </View>
 
                        </ScrollView>
                    </View>

                        <View >

                                
                            <View style={{ flexDirection: 'row', justifyContent:'space-around', borderTopWidth: 1, 
                            borderTopColor:'black',backgroundColor:'white', padding:5  }} >
                                <Button transparent  >
                                    <IconIonic name={typeMobile + "-apps"} sytle={{backgroundColor:'white' }} size={24} />
                                </Button>
                                <Button transparent >
                                    <IconIonic name={typeMobile + "-menu"} sytle={{backgroundColor:'white' }}  size={24} />
                                </Button>
                              
                            </View>

                        </View>
                       
                        {this.renderSection()}
                    </View>
                </Content>
            </Container>
        );

    }
}

const stackNavigator = createStackNavigator({
    Profile,
}, {
        headerLayoutPreset: 'center',
        defaultNavigationOptions: {
            headerLeft: <IconIonic name={typeMobile + "-add"} style={{ paddingLeft: 10 }} size={24} />,
            headerTitle: 'gascalfi',
            headerStyle: {
                backgroundColor: 'white'
            },
            headerRight: <IconIonic name={typeMobile + "-menu"} style={{ paddingRight: 10 }} size={24} />,

        },

    })

export default createAppContainer(stackNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
        justifyContent: 'center',
    },
});
import React, { useState, useEffect, useCallback } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import IconIonic from 'react-native-vector-icons/Ionicons'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'


const typeMobile = Platform.OS === 'ios' ? 'ios' : 'md';

class CardComponent extends React.Component {

    render() {
        const images = {

            "1": require('../imagens/1.jpeg'),
            "2": require('../imagens/2.jpeg'),
            "3": require('../imagens/3.jpeg'),
            "4": require('../imagens/4.jpeg')

        }
        return (
            <Card transparent>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../imagens/me.png')} />
                        <Body>
                            <Text>{this.props.Name} </Text>

                        </Body>
                        <Right>
                            <Button transparent>
                                <IconIonic name={typeMobile + "-more"} size={24} style={{ color: 'black' }} />
                            </Button>

                        </Right>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <IconIonic name={typeMobile + "-heart-empty"} size={24} style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <IconIonic name={typeMobile + "-chatboxes"} size={24} style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <IconIonic name={typeMobile + "-paper-plane"} size={24} style={{ color: 'black' }} />
                        </Button>


                    </Left>
                    <Right>
                        <Button transparent>
                            <IconIonic name={typeMobile + "-bookmark"} size={24} style={{ color: 'black' }} />
                        </Button>

                    </Right>
                </CardItem>
                <CardItem >
                    <Text>Liked by Escobar and others </Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900" }}>varun
                            </Text>
                            Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim.
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

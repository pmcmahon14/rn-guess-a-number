import React from 'react';
import {View, StyleSheet, Button, Image} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is over!</TitleText>
            <Image
                source={require('../assets/success.png')}
                style={styles.image}
                resize='cover'
            />
            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title='NEW GAME' onPress={props.onRestart}/>
        </View>
    )
};

const styles = StyleSheet.create ({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '80%',
        height: 300
    }
});

export default GameOverScreen;
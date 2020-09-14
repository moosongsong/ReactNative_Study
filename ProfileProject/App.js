import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Platform
} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage} source={require('./user.jpg')}/>
                    </View>
                    <View>
                        <CenteredText style={styles.cardName}>
                            MooSong
                        </CenteredText>
                    </View>
                    <View style={styles.cardOccupationContainer}>
                        <Text style={styles.cardOccupation}>
                            React Native Developer
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.cardDescription}>
                            moosong is a really great JavaScript developer. She
                            loves using JS to build React Native applications for
                            iOS and Android.
                        </Text>
                    </View>
                </View>

            </View>
        );
    }
};

const profileCardColor = 'rgb(250,216,216)';
const profileBorderColor = 'rgb(231,158,158)';
const profileNameColor = 'rgb(50,24,24)';

const CenteredText = (props) => (
    <Text style={[styles.centeredText, props.style]}>
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: profileBorderColor,
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius:20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth:3,
        borderColor: profileBorderColor,
        width:120,
        height:120,
        borderRadius: 60,
        marginTop:30,
        paddingTop:0
    },
    cardImage:{
        width:114,
        height:114,
        borderRadius:60
    },
    cardName: {
        color:profileNameColor,
        marginTop: 30,
        fontWeight: 'bold',
        fontSize:24,
        textShadowColor: 'black',
        textShadowOffset:{
            height:2,
            width:2
        },
        textShadowRadius:3
    },
    cardOccupationContainer: {
        borderColor: profileNameColor,
        borderWidth: 3,
        borderTopWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0,

    },
    cardOccupation: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    cardDescription: {
        fontStyle: 'italic',
        marginTop:10,
        marginLeft:40,
        marginRight:40,
        marginBottom: 10,
        lineHeight:26
    },
    centeredText:{
        ...Platform.select({
            ios:{
                fontFamily: 'American Typewriter'
            },
            android:{
                fontFamily: 'monospace'
            }
        })
    }
});

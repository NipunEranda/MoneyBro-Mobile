import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, SafeAreaView, BackHandler } from 'react-native';
import credentials from '../../../cred.json';
import app from '../../../app.json';
import axios from 'axios';
const logo = require('../../assets/img/app.png');
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';


export default class Login extends Component {

    componentDidMount = () => {
        GoogleSignin.configure({
            ClientId: credentials.web.client_id,
            iosClientId: credentials.web.client_id
        });
        
        BackHandler.addEventListener('hardwareBackPress', function () { return true })

    }

    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const user = { sub: userInfo.user.id, name: userInfo.user.name, email: userInfo.user.email, balance: 0, currency: 'USD' };
            const response = await axios.post(`${app.api}/.netlify/functions/auth/google`, user);
            if (response.data) {
                this.props.navigation.push("homeScreen");
            }

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
            console.log(error);
        }
    };

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Image source={logo} style={styles.login_icon} />
                    <GoogleSigninButton
                        style={{ width: 192, height: 48 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={this.signIn}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    login_icon: {
        width: 200,
        height: 200,
        marginTop: 150,
    },
});
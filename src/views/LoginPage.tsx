import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Colors from "../utils/constants/Colors";


function LoginPage(){

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigation = useNavigation<any>();

    return (
        <View>
            <Image source={ require('../utils/images/BumperLogo.png') } style={styles.image} />
            <Text style={styles.textLogIn}>LOGIN</Text>
            <View style={styles.inputArea}>
                <Text style={styles.textHeader}>Email</Text>
                <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={styles.textInput}
                    value={email}
                    onChangeText={newValue => setEmail(newValue)}
                />
            </View>
            <View style={styles.inputArea}>
                <Text style={styles.textHeader}>Password</Text>

                <View style={styles.passwordArea}>
                    <TextInput
                        style={styles.textInputPassword}
                        autoCorrect={false}
                        value={password}
                        onChangeText={newValue => setPassword(newValue)}
                    />

                </View>

            </View>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('HomePage')}>
                <View style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.page}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('SignUpPage')}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <Image source={require('../utils/images/Car.png')} style={styles.carImage} />
        </View>
    );
}

const styles = StyleSheet.create({

    textLogIn: {
        color: Colors.black,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom:20
    },
    inputArea: {
        paddingHorizontal:15
    },
    textHeader: {
        fontSize: 18,
        color: Colors.black,
        fontWeight: 'bold',
        padding:15
    },
    textInput: {
        backgroundColor: Colors.white,
        borderRadius: 25,
        opacity: 0.9,
        color: 'black',
        fontSize: 15,
        padding: 15,
    },
    passwordArea: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: Colors.white,
        borderRadius: 25,
        opacity: 0.9,
        color: Colors.black,
        padding: 15,
    },
    textInputPassword: {
        flexGrow: 1,
        fontSize: 15,
    },
    loginButton: {
        backgroundColor: Colors.orange,
        padding: 20,
        borderRadius: 35,
        width: '50%',
        alignSelf: 'center',
        marginTop: 40,
        marginBottom:10
    },
    loginButtonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black,
    },
    page: {
        flexDirection: 'row',
        marginLeft: 80,
    },
    image:{
        resizeMode: 'center',
        marginTop: 60
    },
    carImage:{
        resizeMode: 'center',
        marginTop:22,
        marginLeft:140
    }

});


export default LoginPage;

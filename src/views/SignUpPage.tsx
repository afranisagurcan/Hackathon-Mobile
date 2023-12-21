import React, {FC, useState} from 'react';
import {
    Image,
    ImageBackground,
    ScrollView, StyleSheet, Text,
    TextInput, TouchableOpacity,
    View,
} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import Colors from "../utils/constants/Colors";
import ISignUp from "../utils/types/signup.type";


const InputGroup: FC<ISignUp.InputGroupProps> = ({
                                                    label,
                                                    contentContainerStyle,
                                                    ...props
                                                }) => {
    return (
        <View style={contentContainerStyle}>
            <Text style={styles.textHeader}>{label}</Text>
            <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
                {...props}
            />
        </View>
    );
};


function SignUpPage() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');

    const navigation = useNavigation<any>();


    return (
        <View>
            <View style={styles.header}>
                <Image source={require('../utils/images/Computer.png')} style={styles.image} />
                <View style={styles.title}>
                    <Text style={styles.text}>Sign up to</Text>
                    <Image source={require('../utils/images/BumperLogo.png')} style={styles.imageLogo} />
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.inputArea}>

                    <InputGroup
                        label={'Name'}
                        value={name}
                        onChangeText={newValue => setName(newValue)}
                    />

                    <InputGroup
                        label={'Surname'}
                        value={surname}
                        onChangeText={newValue => setSurname(newValue)}
                    />

                    <InputGroup
                        label={'Email'}
                        value={email}
                        onChangeText={newValue => setEmail(newValue)}
                    />

                    <InputGroup
                        label={'Password'}
                        value={password}
                        onChangeText={newValue => setPassword(newValue)}
                    />

                </View>
            </View>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('HomePage')}>
                <View style={styles.signupButton}>
                    <Text style={styles.signupButtonText}>Sign up</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.page}>
                <Text>Already a member? </Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('LoginPage')}>
                    <View>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    image:{
        resizeMode:'contain',
        width: 150,
        height: 150,
        marginLeft:20
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop:40,
        paddingBottom:10,
    },
    title:{
        flexDirection: 'column',
        padding:20
    },
    imageLogo:{
        resizeMode:'contain',
        width:150,
        height:50,
    },
    text:{
        paddingHorizontal:5,
        fontSize: 30,
        fontWeight:"bold",
        color: Colors.grey,
    },
    body:{
        padding:10,
        margin:10,
        borderRadius:30,
        borderColor: Colors.yellow,
        borderWidth:3
    },
    inputArea: {
        paddingHorizontal:15
    },
    textHeader: {
        fontSize: 18,
        color: Colors.black,
        fontWeight: 'bold',
       paddingHorizontal:20
    },
    textInput: {
        backgroundColor: Colors.white,
        borderRadius: 25,
        opacity: 0.9,
        color: 'black',
        fontSize: 15,
        padding: 15,
        marginBottom:10,
    },
    signupButton: {
        backgroundColor: Colors.orange,
        padding: 20,
        borderRadius: 35,
        width: '50%',
        alignSelf: 'center',

    },
    signupButtonText:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black,
    },
    page: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
});

export default SignUpPage;

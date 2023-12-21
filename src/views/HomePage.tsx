import React from 'react';
import {
    Image,
    StyleSheet, Text, TouchableOpacity,
    View,
} from 'react-native';
import Colors from "../utils/constants/Colors";
import Feather from '@expo/vector-icons/FontAwesome';


function HomePage(){

    return(
        <View style={styles.container}>

            <View style={styles.card}>
                <Image source={require('../utils/images/Image.png')} style={styles.image} />
                <TouchableOpacity style={styles.button} activeOpacity={0.6}>
                    <Text style={styles.buttonText}>From just £99 per tyre</Text>
                    <Feather name="arrow-right" size={20} color="#fff" style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <Text style={styles.textCard2}>You've paid 2 of 5 instalment to date:</Text>
                <View style={styles.line} />
                <View style={styles.texts2}>
                    <View style={{flexDirection:'column'}}>
                        <Text>Next payment</Text>
                        <Text style={{fontWeight:'bold'}}>1/3/2023</Text>
                    </View>
                    <View style={styles.amountText}>
                        <Text>Amount due</Text>
                        <Text style={{fontWeight:'bold'}}>£250.00</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonCard2} activeOpacity={0.6}>
                    <Text style={styles.buttonTextCard2}>View details or Make a payment</Text>
                    <Feather name="arrow-right" size={20} color="#fff" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.6}>
                    <Text style={styles.textButtonCard2}>Change your payment method</Text>
                    <Feather name="arrow-right" size={20} color="#fff" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.6}>
                    <Text style={styles.textButtonCard2}>Need help? Chat with our Support team?</Text>
                    <Feather name="arrow-right" size={20} color="#fff" style={styles.icon} />
                </TouchableOpacity>
            </View>


        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.grey,
        width:'100%',
        height:'100%'
    },
    card:{
        backgroundColor:Colors.white,
        borderRadius:30,
        borderWidth:2,
        borderColor:Colors.black,
        marginTop:50,
        marginHorizontal:15
    },
    image:{
        width:300,
        height:125,
        resizeMode:'contain',
        marginTop:20,
        marginLeft:25
    },
    buttonText:{
        backgroundColor:Colors.white,
        borderRadius:30,
        color: Colors.black,
        fontSize: 18,
        textDecorationLine: 'underline',
        fontWeight:'bold',
        flex:1,
        alignItems:'flex-end'
    },
    button:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 5,
    },
    icon: {
        color:Colors.black
    },
    card2:{

    },
    textCard2:{
        fontWeight:'bold',
        margin:15
    },
    line: {
        height: 1.5,
        backgroundColor: Colors.lightGrey ,
        marginVertical: 3,
        marginHorizontal:15
    },
    texts2: {
        flexDirection:'row',
        marginVertical:5,
        marginHorizontal:15
    },
    amountText:{
        flexDirection:'column',
        flex:1,
        alignItems:'center'
    },
    buttonCard2:{
        backgroundColor:Colors.green,
        flexDirection: 'row',
        alignItems: 'center',
        margin:20,
        borderRadius: 30,
        borderWidth:1
    },
    buttonTextCard2:{
        borderRadius:30,
        color: Colors.black,
        fontSize: 18,
        padding:10
    },
    textButtonCard2:{
        backgroundColor:Colors.white,
        borderRadius:30,
        color: Colors.black,
        fontSize: 15,
        textDecorationLine: 'underline',
        flex:1,
        alignItems:'flex-end'
    },


});



export default HomePage;

import React from "react";
import {View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function FlatButton({text, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>

        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button:{
        backgroundColor:"cadetblue",
        borderRadius: 5,
        paddingHorizontal: 80,
        paddingVertical: 18,
        margin: 5,
    },
    buttonText:{
        color: "white",
        fontWeight: "bold",
        
    },
});
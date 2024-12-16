import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from "@expo/vector-icons";

const windowWidth = Dimensions.get('window').width;
const numColumns = 4;
const itemWidth = windowWidth / numColumns;

export default function Chat() {

    const navigation = useNavigation();
    return (
        <ScrollView style={styles.scrollview}>
             <TouchableOpacity style={styles.backbutton} onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" color='red' size={24} />
        </TouchableOpacity>
        <View>
        <Text style={styles.titletop}>Your chat</Text>
            <View style={styles.view1}>
                
                    <View style={styles.view1}>
                    <Text>No Chat Available</Text>
                    </View>
           
            </View>
        </View>
    </ScrollView>
    
    );
}

const styles = StyleSheet.create({
    scrollview: {
        marginTop: 20, padding: 12
    },
    titletop: {
        color:'Black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700'
      },
    view1:{
        marginVertical:12,
        padding:55
    },
    backbutton: {
        backgroundColor:'white',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        width:30,
        height:30,
        marginHorizontal:20
      },
});
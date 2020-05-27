import React, { Component } from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Dropdown } from 'react-native-material-dropdown'

export default class ItemScreen extends Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {

  let data = [{
    value: 'Black',
  },
  {
    value: 'Blue',
  },
  {
  value: 'White'
  }];

    return (
          <ScrollView>
            <View>
                <Image 
                  style={{width: '100%', height: '100%'}}
                  source={require('./img/vgs.jpg')}
                />

              <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate("Home")}>
                  <Icon name="ios-arrow-round-back" size={32} color="#FFF" />
              </TouchableOpacity>

            </View>

            <View style={styles.text}>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>Dzd 4000</Text>
                <Text style={{ fontSize: 18, paddingTop: 15 }}>Vans old school black semi rounded sunglasses</Text>
                  <Dropdown
                    label='Colour'
                    data={data}
                  />
                <Text style={{ fontSize: 17, paddingTop: 10 }}>Delivery fee: DZD 900</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={{color: '#FFF', textAlign:'center', fontSize: 20}}>BUY NOW</Text>
              </TouchableOpacity>

            </View>
        </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
    backButton: {
        position: "absolute",
        top: 48,
        height: 32,
        width: 32,
        left: 15,
        borderRadius: 16,
        backgroundColor: "rgba(21, 22, 48, 0.3)",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
      marginTop: 45,
      paddingTop: 45,
      paddingHorizontal: 15
    },
    button: {
        backgroundColor:'#E9446A',
        marginTop: 30,
        marginHorizontal: 30,
        borderRadius: 5,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
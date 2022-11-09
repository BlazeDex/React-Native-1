import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import React from 'react';
import { Button, StyleSheet, Text, View, Switch, TextInput, Alert } from 'react-native';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      newText : '',
    }    
  }

  onChangeText = (text) => {    
    this.setState({newText: text})    
  }

  onChange = (value) => {
    console.warn(`El switch cambiará a: ${value}`);
    this.setState({switchValue: value})
  }

  onPressLearnMore(){
    Alert.alert(`${this.state.newText}`, "Es lo que escribió.") 
  }

  render() {    
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeText}          
          />
        <Switch
          value = {this.state.switchValue}
          onValueChange={() => this.onChange(!this.state.switchValue)}
        />
        <Button
          onPress= {() => this.onPressLearnMore()}
          title ="Learn More"
          color="#841584"
          accessibilityLabel='Learn more about this purple button'
          />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 15,
    height: 35,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1
  }
});

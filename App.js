import React, { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import {QA} from'./QA';

let qno = 0;
let score = 0;

let quizArray = [];

const quiz = QA.quiz;

quizArray = Object.keys(quiz).map((k) => {return quiz[k]});

this.state = {
  question : quizArray[this.qno].question,
  options : quizArray[this.qno].options,
  correctOption : quizArray[this.qno].correct,
  countCheck : 0
}



export default class Quiz extends Component {

  
  _onPressButton() {
    alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
    <Text  style={styles.question}>{question} </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title= {answer1}
            color="#841584"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'space-around',
   
  },
  buttonContainer: {
    margin: 10,
    flex: 1,
    justifyContent: 'space-around'
    
    
  },
  question: {
    
    fontSize: 20,
    textAlign: 'center'
  }
});

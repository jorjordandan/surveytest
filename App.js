import React, { PureComponent, createRef } from "react";
import SurveyMonkey from "react-native-survey-monkey";
import { View, Text, TouchableOpacity } from "react-native";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.onTouch = this.onTouch.bind(this);
    this.surveyMonkeyRef = createRef();
  }

  onTouch() {
    this.surveyMonkeyRef.current.showSurveyMonkey("LS73QGP");
  }

  render() {
    return (
      <View>
        <SurveyMonkey ref={this.surveyMonkeyRef} />
        <TouchableOpacity onPress={this.onTouch}>
          <Text style={{ paddingTop: 400 }}>Show survey</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// CustomButton
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default class CustomButton extends Component{
  static defaultProps = {
    title: 'untitled',
    buttonColor: '#000',
    titleColor: '#fff',
    borderColor: 'white'
  }

  constructor(props){ // props는 반드시 필요하답니다.
    super(props); // 기본적으로는 자기 자신을 호출
  }

  render(){ 
    return (
      <TouchableOpacity style={[ // 터치하면 투명해지는 버튼 같은 느낌
        styles.button,
        {backgroundColor: this.props.buttonColor}
      ]}
      onPress={this.props.onPress}>
        <Text style={[
          styles.title,
          {color: this.props.titleColor} // 해당 Custome버튼이 호출될 때 가지게 될 성질 - this.props.titleColor
        ]}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
  },
});
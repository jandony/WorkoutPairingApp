import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';
import styled from 'styled-components';

const StyledView = styled.View`
    color: blue;
    background-color: blue;
`
 
export default class Demo extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  
  render() {
    var data = [["C", "Java", "JavaScript", "PHP"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
    return (
      <StyledView>
        <DropdownMenu 
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        >
        </DropdownMenu>
      </StyledView>
    );
  }
  
}


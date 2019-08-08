import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AppRegistry, 
  SectionList,
  Alert,
} from 'react-native';
import styled from "styled-components";
import { MonoText } from '../components/StyledText';
import customData from '../metObjects.json';
// import sectionData from '../sectionObjects.json';

const Contact = styled.Text`
backgroundColor: ${props => props.isActive ? 'red': 'transparent'}
color: ${props => props.isActive ? 'white': 'black'}
`

export default class HomeScreen extends Component {
 //state object
  state = { 
    selected: false,
    selectedItem: "",
    selectedGroup: [],
    categories: [],
};

// componentDidMount() {
    // var sectionData = [];

    // console.log(customData);
    
    // customData.forEach(item => {
    //     console.log(item.subcategory);

        // var styledCategory = `<em>${item.category}</em>`;
        // sectionData.push({title: item.title, });

        // item.subcategories.forEach(sub => {
        //     // console.log(`Subcategory: ${sub.subcategory}`);
        //     sectionData.push(sub.subcategory);
        // });
    // });

    // this.setState({categories: catArr});
    // console.log(catArr);
// }

metSubCategories = () => {}

onPress = person => {
  var group = this.state.selectedGroup;
  group.push(person);

  this.setState({selectedItem: person});
  this.setState({selectedGroup: group});
  console.log(this.state.selectedGroup);

//   console.log(customData[1].category);

}

render() {

    var bicycling = ["Mountain", "General"];
    var conditioningExercise = ["Stationary Biking", "Calisthenics (no equipment)", "Circuit Training", "Stair Steppers", "Jump Roping", "Rowing (water)", "Rowing (machine)", "Ski Machine", "Pilates"];
    var jogging = ["Stationary Biking"];
    var running = ["General", "4 mph (13 min/mile", "5 mph (12 min/mile)", "6 mph (10 min/mile)", "7 mph (8.5 min/mile)", "8 mph (7.5 min/mile)", "9 mph (6.5 min/mile)", "10 mph (6 min/mile)", "11 mph (5.5 min/mile)", "12 mph (5 min/mile)", "13 mph (4.5 min/mile)", "14 mph (4 min/mile)"];
    var sports = ["Badminton", "Basketball", "Bowling", "Boxing", "Cheerleading", "Cricket", "Curling", "Football (Competitive)", "Golf", "Gymnastics", "Hockey", "Horseback Riding", "Martial Arts", "Lacrosse", "Moto-Cross", "Polo (Horseback", "Racquetball", "Rock/Mountain Climbing", "Skydiving", "Soccer", "Table Tennis", "Tai Chi", "Tennis", "Volleyball", "Wrestling"];
    var walking = ["4 mph (13 min/mile"];
    var waterActivities = ["Canoeing", "Diving", "Skiing", "Surfing", "Swimming (Laps", "Swimming (Backstroke)", "Swimming (Breaststroke)", "Swimming (Butterfly)"];
    var winterActivities = ["Skating", "Skiing"];

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <SectionList style={{paddingBottom: 100}}
          sections={[
              { title: 'Bicyling', data: bicycling },
              { title: 'Conditioning Exercise', data: conditioningExercise },
              { title: 'Jogging', data: jogging },
              { title: 'Running', data: running },
              { title: 'Sports', data: sports },
              { title: 'Walking', data: walking },
              { title: 'Water Activities', data: waterActivities },
              { title: 'Winter Activities', data: winterActivities }
          ]}

          renderItem={({item}) => <Contact style={styles.item} isActive={this.state.selectedItem === item} onPress={() => this.onPress(item)}> {item} </Contact>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />


      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          Exercises Selected:
        </Text>

        <View>
          <Text>{this.state.selectedGroup.length}</Text>
        </View>
      </View>
    </View>
  );
}
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
    textAlign: 'left',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
});

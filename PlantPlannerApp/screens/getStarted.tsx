import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';


const GetStartedScreen: React.FC = () => {
  const navigation = useNavigation();
  
  const GetStartedButton = () => {
    navigation.navigate('allPlants');
  };

  return (
    <Grid>
      <Col style={styles.leftColumn}>
        <Row style={styles.gridRow}>
          <Image
            source={require('../assets/images/getStarted_1.jpg')}
            style={styles.image}
          />
        </Row>
        <Row style={styles.gridRow}>
          <Image
            source={require('../assets/images/getStarted_2.jpg')}
            style={styles.image}
          />
        </Row>
        <Row style={styles.gridRow}>
          <Image
            source={require('../assets/images/getStarted_3.jpg')}
            style={styles.image}
          />
        </Row>
        <Row style={styles.gridRow}>
          <Image
            source={require('../assets/images/getStarted_4.jpg')}
            style={styles.image}
          />
        </Row>
        <Row style={styles.gridRow}>
          <Image
            source={require('../assets/images/getStarted_5.jpg')}
            style={styles.image}
          />
        </Row>
      </Col>
      <Col style={styles.rightColumn}>
        <View style={styles.rightColumnContent}>
          <Text style={styles.gridText}>California Native Plants</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={GetStartedButton} style={styles.gridButton}>
                <Text style={styles.gridButtonText}>Get Started</Text>
              </TouchableOpacity>
            </View>
        </View>
      </Col>
    </Grid>
);
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  leftColumn: {
    backgroundColor: '#0F4203',
    flex: 1,
  },
  rightColumn: {
    backgroundColor: '#82A269',
    flex: 2,
  },
  gridRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: '#0F4203',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  rightColumnContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridText: {
    position: 'absolute',
    textAlign: 'center',
    lineHeight: 80,
    paddingBottom: height * .25,
    fontFamily: 'Belleza-Regular',
    fontSize: 50,
    color: '#0F4203',
  },
  
  buttonContainer: {
    position: 'absolute',
    bottom: height * .25,
    alignItems: 'center',
  },
  
  gridButton: {
    backgroundColor: '#135804',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.60,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gridButtonText: {
    fontFamily: 'PublicSans-Light',
    fontWeight:'300',
    fontSize: 24,
    color: '#f1ecce',
  },
});



export default GetStartedScreen
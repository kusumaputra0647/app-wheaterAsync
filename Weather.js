import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions } from 'react-native';

const windIcon = require('./img/wind.png');
const tempIcon = require('./img/temp.png');
const mainIcon = require('./img/main.png');
const levelIcon = require('./img/sea.png');

//import Loader from './loading/Loader';

export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '',
        description: '',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
        //loading: false,
      }
    };
  }
  async getWeather() {

  try {
    let response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=2e62f78ca2aa2fd0c2a9eef06bd7cea6&units=metric'
    );

    let responseJson = await response.json();
    return this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
    });
  } catch (error) {
    console.error(error);
  }
}


  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.form4}>

          <Text style={{ textAlign: 'center', paddingTop: 15, paddingBottom: 15,fontSize: 20 }}> Masukan Nama Kota </Text>
          <TextInput
                style={{ height: 40, color: 'white', padding: 9}}
              placeholder=" Masukan Nama kota "
              onChangeText={(city) => this.setState({ city })}
            />

            <Button
              onPress={() => this.getWeather()}
              title="Cari"
              color="black"

              accessibilityLabel="Klik untuk melihat cuaca"
            />

      </View>

      <View style={styles.form4}>
        <View style={styles.button}>
          <Text> City : { this.state.city} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={tempIcon} style={styles.icon} />
       </View>
          <Text> Temp : { this.state.forecast.temp} </Text>
        </View>
      </View>
      <View style={styles.form4}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Main : { this.state.forecast.main} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Main Desc : { this.state.forecast.description} </Text>
        </View>
      </View>
      <View style={styles.form4}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Sunrise : { this.state.forecast.sunrise} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Sunset : { this.state.forecast.sunset} </Text>
        </View>
      </View>
      <View style={styles.form4}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Pressure : { this.state.forecast.pressure} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Humidity : { this.state.forecast.humidity} </Text>
        </View>
      </View>
      <View style={styles.form4}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Sea Level : { this.state.forecast.sea_level} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Ground Level : { this.state.forecast.grnd_level} </Text>
        </View>
      </View>
      <View style={styles.form4}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={windIcon} style={styles.icon} />
       </View>
          <Text> Wind Speed : { this.state.forecast.speed} </Text>
        </View>
      </View>
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column'
  },
  form1: {
    flex: 0.7,
    backgroundColor: 'white',
  },
  form2: {
    flex: 0.4,
    backgroundColor: '#FFFFFF',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  form3: {
    flex: 0.5,
    backgroundColor: '#ffffff',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  form4: {
    flex: 0.3,
    backgroundColor: '#ECEFF1',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  form5: {
    flex: 0.7,
    backgroundColor: '#ffff',
    margin: 10
  },
  button: {
    width: 140,
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderColor: '#ffff',
    //borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    height: 40,
    width: 30,
  },
  icon: {
    tintColor: '#2196F3',
    height: 20,
    width: 20,
  }
});

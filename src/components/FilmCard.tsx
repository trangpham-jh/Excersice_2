/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import COLORS from '../consts/colors';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const FilmCard = ({film}) => {
  const {posterurl, title, year, imdbRating} = film;
  return (
    <TouchableHighlight underlayColor={COLORS.white}>
      <View style={style.card}>
        <View style={{alignItems: 'center', marginTop: 20, marginBottom: 10}}>
          <Image source={{uri: posterurl}} style={{height: 120, width: 120}} />
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={{color: COLORS.dark, fontSize: 18, fontWeight: 'bold'}}>
            {title}
          </Text>
          <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
            {year}
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 15,
            right: 15,
          }}>
          <View style={style.imdbLabel}>
            <Text>{imdbRating}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  card: {
    height: 240,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  imdbLabel: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default FilmCard;

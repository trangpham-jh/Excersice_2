import React from 'react';
import {SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import FilmCard from '../components/FilmCard';
import COLORS from '../consts/colors';
import MOVIES from '../consts/movies';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={MOVIES}
        renderItem={({item}) => <FilmCard film={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

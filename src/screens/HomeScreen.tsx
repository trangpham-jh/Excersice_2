import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { BottomTabNavigationParamList } from 'navigation/TabNavigation';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FilmCard from '../components/FilmCard/FilmCard';
import COLORS from '../consts/colors';
import MOVIES from '../consts/movies';

type HomeScreenProps = {
  navigation: BottomTabNavigationProp<BottomTabNavigationParamList>;
};

const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={MOVIES}
        renderItem={({ item }) => <FilmCard film={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

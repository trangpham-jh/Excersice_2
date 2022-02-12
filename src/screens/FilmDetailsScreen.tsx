import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import MOVIES from 'consts/movies';
import SCREEN_NAMES from 'consts/screenNames';
import { StackNavigationParamList } from 'navigation/AppNavigation';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

type FilmDetailsScreenProps = {
  route: RouteProp<StackNavigationParamList, SCREEN_NAMES.FILM_DETAILS_SCREEN>;
  navigation: StackNavigationProp<StackNavigationParamList>;
};

const FilmDetailsScreen = ({ route, navigation }: FilmDetailsScreenProps) => {
  const [film, setFilm] = useState<typeof MOVIES[number] | undefined>(null!);
  const { id } = route.params;

  useFocusEffect(
    useCallback(() => {
      const foundFilm = MOVIES.find(item => item.id === id);
      setFilm(foundFilm);
    }, [id]),
  );

  useEffect(() => {
    if (film) {
      navigation.setOptions({
        headerShown: true,
        title: film?.title,
        headerBackTitleVisible: false,
      });
    }
  }, [film, navigation]);

  return (
    <View>
      <Text>Title: {film?.title}</Text>
      <Text>actors: {film?.actors.join(', ')}</Text>
    </View>
  );
};

export default FilmDetailsScreen;

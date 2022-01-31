/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import InboxCard from '../components/InboxCard';
import COLORS from '../consts/colors';
import messages from '../consts/messages';

const InboxScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <FlatList
        data={messages}
        renderItem={({item}) => <InboxCard item={item} />}
        ListFooterComponent={() => <View style={{marginVertical: 15}} />}
      />
    </SafeAreaView>
  );
};

export default InboxScreen;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ListRenderItem, SafeAreaView, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import InboxCard from '../components/InboxCard';
import COLORS from '../consts/colors';
import messages from '../consts/messages';

const InboxScreen = ({ navigation }) => {
  const renderItem: ListRenderItem<typeof messages[number]> = ({ item }) => {
    ///adhakjfhkahd
    //hkajdfhakjfsd
    return <InboxCard item={item} />;
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        ListFooterComponent={() => <View style={{ marginVertical: 15 }} />}
      />
    </SafeAreaView>
  );
};

export default InboxScreen;

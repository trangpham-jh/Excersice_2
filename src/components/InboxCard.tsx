/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import COLORS from '../consts/colors';
import messages from '../consts/messages';

type InboxCardProps = {
  item: typeof messages[number];
};

const InboxCard = ({ item }: InboxCardProps) => {
  return (
    <View style={style.inboxCard}>
      <Image
        source={item.image}
        style={{ height: 50, width: 50, borderRadius: 50 }}
      />
      <View
        style={{
          height: 100,
          marginLeft: 10,
          paddingVertical: 20,
          flex: 1,
        }}>
        <Text style={{ color: COLORS.dark, fontWeight: 'bold', fontSize: 16 }}>
          {item.name}
        </Text>
        <Text style={{ fontSize: 13, color: COLORS.grey }}>{item.message}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  inboxCard: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
});
export default InboxCard;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableHighlight} from 'react-native-gesture-handler';
import COLORS from '../consts/colors';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <View style={{position: 'relative'}}>
          <Image
            source={require('../assets/avatar.jpeg')}
            style={{height: 100, width: 100, borderRadius: 25}}
          />
          <Image
            source={require('../assets/icons/add-photo.png')}
            style={{
              height: 35,
              width: 35,
              borderRadius: 50,
              position: 'absolute',
              bottom: -10,
              right: -10,
            }}
          />
        </View>
      </View>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <TextInput
            placeholderTextColor={COLORS.grey}
            style={{...styles.field, flex: 1, marginRight: 15}}
            placeholder="First name"
          />
          <TextInput
            placeholderTextColor={COLORS.grey}
            style={{...styles.field, flex: 1}}
            placeholder="Last name"
          />
        </View>
        <TextInput
          placeholderTextColor={COLORS.grey}
          style={{...styles.field, marginVertical: 20}}
          placeholder="Phone"
        />
        <TextInput
          placeholderTextColor={COLORS.grey}
          style={{...styles.field}}
          placeholder="Email"
        />
        <Text
          style={{
            color: COLORS.grey,
            marginTop: 10,
            textDecorationLine: 'underline',
          }}
          onPress={() => navigation.navigate('TermsPage')}>
          Terms and Service
        </Text>

        <TouchableHighlight style={styles.submit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 10,
  },
  submit: {
    marginHorizontal: 70,
    marginTop: 30,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: COLORS.blue,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  submitText: {
    color: COLORS.white,
    textAlign: 'center',
  },
});

export default ProfileScreen;

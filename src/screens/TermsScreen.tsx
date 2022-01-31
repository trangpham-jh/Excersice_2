/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, ScrollView} from 'react-native';
import COLORS from '../consts/colors';

const TermsScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 20}}>
      <ScrollView>
        <Text style={{color: COLORS.dark, marginTop: 10, marginBottom: 30}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor
          vehicula pulvinar. Nunc sollicitudin tortor sit amet tortor vestibulum
          varius. Suspendisse maximus aliquet ante, et vulputate mi tincidunt
          ac. Nulla cursus leo sapien, vitae pretium leo aliquam eu. Sed a odio
          purus. Nullam et eleifend nunc, ac condimentum risus. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Curabitur in sagittis neque. Sed nec sem viverra, feugiat eros
          ultricies, pharetra turpis. Morbi aliquam neque ligula, vel vehicula
          massa semper vitae. Nulla dictum lacus sollicitudin orci tempor, eget
          aliquam justo aliquam. Sed aliquam lacus nec nulla elementum
          pellentesque. Proin ullamcorper, felis nec mollis consectetur, felis
          lacus mattis erat, in lobortis ante arcu id nulla. Nunc semper
          faucibus massa, vel ultricies nisl efficitur eget. Aliquam in ante
          fermentum, ornare tortor semper, eleifend dui.
          {'\n'}
          {'\n'} Nulla facilisi. Pellentesque volutpat consequat nisl, vulputate
          congue leo rhoncus vel. Sed ante ipsum, hendrerit a ante eu, luctus
          porta enim. Aenean non massa elementum, pellentesque ligula non,
          ultrices dolor. Proin hendrerit eros eu tellus mollis pulvinar.
          Integer a magna et orci dapibus laoreet non eu dui. Nunc sed erat sed
          tortor dignissim malesuada. Nunc mattis ac justo et tempor. Sed
          volutpat ac sem sit amet dignissim. In dictum lectus nibh. Fusce
          condimentum neque odio, convallis faucibus turpis varius ut.
          Pellentesque sem metus, dictum vel cursus eget, congue non lacus.
          Mauris feugiat massa enim, sit amet ornare mauris dignissim ac.
          {'\n'} {'\n'}Donec non elementum turpis. Aenean non mi pulvinar,
          luctus ex id, consequat purus. Pellentesque nisi elit, consectetur
          quis dui malesuada, luctus faucibus velit. Quisque sed lobortis purus.
          Curabitur consectetur urna quis orci mattis, molestie gravida risus
          cursus. Vestibulum aliquam ornare velit eu malesuada. Vivamus
          pellentesque vulputate lectus, sit amet condimentum elit fringilla sit
          amet. Nulla vehicula tincidunt lacus aliquam tincidunt. Praesent
          tempor tortor id ligula aliquet ullamcorper.
          {'\n'} {'\n'} Suspendisse eu massa vel ex luctus pellentesque ac id
          erat. Sed luctus ipsum felis, non commodo leo sollicitudin ut. Cras
          eget dignissim arcu. Nunc luctus vulputate massa et eleifend. Etiam
          porttitor justo quis libero molestie, sit amet blandit nisi tincidunt.
          In ultrices enim sed orci varius placerat. Donec non sapien metus.
          Donec iaculis tincidunt diam. Pellentesque et diam quis mauris iaculis
          semper.
          {'\n'} {'\n'}Suspendisse a nisi leo. Curabitur mattis blandit
          ullamcorper. Sed rhoncus nulla in ligula mattis, quis consequat neque
          rhoncus. Donec urna mi, placerat lacinia porta nec, posuere ut ex. Sed
          non vehicula turpis, in pretium odio. Nullam fringilla urna et quam
          rutrum, sit amet hendrerit erat tempus. Morbi vulputate eros sed arcu
          hendrerit, eu ornare tellus congue. In non felis ligula. Integer
          vestibulum velit ac gravida lobortis.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsScreen;

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colours } from '../utils/colours';
import { fontSizes } from '../utils/sizes';
import { spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}> We haven't focused on anything yet </Text>

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Things we have focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: spacing.lg, flex: 1,},
  item: {
    fontSize: fontSizes.md,
    color: colours.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colours.white,
    fontSize: fontSizes.lg,
    padding: spacing.md,
    fontWeight: 'bold',
  },
});

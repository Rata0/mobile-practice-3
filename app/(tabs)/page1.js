import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi! My name is Alexander</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA500",
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 30,
  }
});

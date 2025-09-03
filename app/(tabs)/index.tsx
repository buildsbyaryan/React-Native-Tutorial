import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Link href="/about" asChild>
        <Text>About</Text>
      </Link>
      <Link href="/Card" asChild>
        <Text className="text-yellow-500 text-3xl font-bold">Card</Text>
      </Link>
      <Link href="/animation" asChild>
        <Text className="text-yellow-500 text-3xl font-bold">Animation</Text>
      </Link>
      <Link href="/hooks" asChild>
        <Text className="text-pink-300 text-3xl font-bold">Hooks</Text>
      </Link>
      <Link href="/category" asChild>
        <Text className="text-purple-500 text-3xl font-bold">Category</Text>
      </Link>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

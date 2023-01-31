import { ActivityIndicator, View } from 'react-native';
import { Game, StartGame } from './screens'

import { Header } from './components';
import { colors } from './constants';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import { useState } from 'react';

const App = () => {
  const [loaded, error] = useFonts({
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf')
  });
  const [userNumber, setUserNumber] = useState(null);

  const onHandlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const Content = () => userNumber ?
    <Game selectedNumber={userNumber} /> :
    <StartGame onHandlerStartGame={onHandlerStartGame} />;

  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title="Adivina el número" />
      <Content />
    </View>
  );
}

export default App;
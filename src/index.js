import { Header } from './components';
import { StartGame } from './screens'
import { View } from 'react-native';
import { styles } from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Adivina el número" />
      <StartGame />
    </View>
  );
}

export default App;
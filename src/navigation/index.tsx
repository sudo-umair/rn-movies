import { NavigationContainer } from '@react-navigation/native';
import type { RootStackParamList } from '../interfaces/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../common/screens';
import HomeScreen from '../screens/home';
import MovieDetailsScreen from '../screens/details';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Screens.Home} component={HomeScreen} />
        <Stack.Screen
          options={{
            animation: 'default',
          }}
          name={Screens.MovieDetails}
          component={MovieDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

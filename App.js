
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from "./src/views/LoginPage";
import SignUpPage from "./src/views/SignUpPage";
import HomePage from "./src/views/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="LoginPage" component={LoginPage} />
          <Stack.Screen options={{ headerShown: false }} name="SignUpPage" component={SignUpPage} />
          <Stack.Screen options={{ headerShown: false }}  name="HomePage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Post from "./screens/Post";


const Stack = createNativeStackNavigator();

function App() {
  const navigationRef = React.useRef(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigationRef.current?.navigate("Home");
    }, 2000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

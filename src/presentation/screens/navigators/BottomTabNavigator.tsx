import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../home/HomeScreen';
import { SettingScreen } from '../settings/SettingScreen';
import { ProfileScreen } from '../profile/ProfileScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />

    </Tab.Navigator>
  );
}
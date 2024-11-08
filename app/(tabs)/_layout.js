import { Tabs } from "expo-router";
import Foundation from '@expo/vector-icons/Foundation';

export default () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="page1"
                options={{
                    title: 'page 1',
                    tabBarIcon: () => <Foundation name="page" size={24} color="red" />,
                    headerShown: false,
                }}
            />

            <Tabs.Screen
                name="page2"
                options={{
                    title: 'page 2',
                    tabBarIcon: () => <Foundation name="page" size={24} color="blue" />,
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
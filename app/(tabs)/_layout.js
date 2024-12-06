import { Tabs } from "expo-router";
import Foundation from '@expo/vector-icons/Foundation';

export default () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="page1"
                options={{
                    title: 'О себе',
                    tabBarIcon: () => <Foundation name="page" size={24} color="red" />,
                    headerShown: false,
                }}
            />

            <Tabs.Screen
                name="page2"
                options={{
                    title: 'Мои языки программирования',
                    tabBarIcon: () => <Foundation name="page" size={24} color="blue" />,
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}

import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import notifee from '@notifee/react-native';

const Notifee = () => {
    const onDisplayNotification = async () => {
        // Request permission for iOS
        await notifee.requestPermission();

        // Create channel for Android
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
            sound: 'default', // Use the default notification sound
            importance: 4, // High importance
        });

        // Display notification
        await notifee.displayNotification({
            title: 'Notifee',
            body: 'Notification using Notifee Package!',
            android: {
                channelId,
                smallIcon: 'ic_launcher', // Ensure this icon exists in your drawable folder
                pressAction: {
                    id: 'default',
                },
                sound: 'default', // Use the default sound
            },
            ios: {
                sound: 'default', // Default iOS sound
            },
        });
    };

    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={onDisplayNotification} style={styles.button}>
                    <Text style={styles.buttonText}>Show Notifications</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: 15,
    },
    button: {
        backgroundColor: '#DB3022',
        padding: 12,
        borderRadius: 25,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
    },
});

export default Notifee;

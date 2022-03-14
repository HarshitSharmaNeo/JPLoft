import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CustomBottomTab = () => {

    const [home, setHome] = useState(true);
    const [chat, setChat] = useState(false);
    const [message, setMessage] = useState(false);
    const [profile, setProfile] = useState(false);

    const homePress = () => {
        setHome(true);
        setChat(false);
        setMessage(false);
        setProfile(false);
    }
    const chatPress = () => {
        setHome(false);
        setChat(true);
        setMessage(false);
        setProfile(false);
    }
    const messagePress = () => {
        setHome(false);
        setChat(false);
        setMessage(true);
        setProfile(false);
    }
    const profilePress = () => {
        setHome(false);
        setChat(false);
        setMessage(false);
        setProfile(true);
    }

    return (
        <View style={styles.mainView}>
            <TouchableOpacity style={styles.touchableStyle} onPress={() => homePress()}>
                <Image source={{ uri: 'https://img.icons8.com/material-outlined/344/home--v2.png' }} style={[styles.image,
                home ? { tintColor: 'pink' } : { tintColor: 'lightgrey' }
                ]} />
                {
                    home
                        ? <Text style={styles.txt}>{'Home'}</Text>
                        : <></>
                }
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableStyle} onPress={() => chatPress()}>
                <Image source={{ uri: 'https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/344/external-chat-communication-royyan-wijaya-detailed-outline-royyan-wijaya-4.png' }}
                    style={[styles.image, chat ? { tintColor: 'pink' } : { tintColor: 'lightgrey' }]} />
                {
                    chat
                        ? <Text style={styles.txt}>{'Chat'}</Text>
                        : <></>
                }
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableStyle} onPress={() => messagePress()}>
                <Image source={{ uri: 'https://img.icons8.com/material-outlined/344/mail.png' }} style={[styles.image, message ? { tintColor: 'pink' } : { tintColor: 'lightgrey' }]} />
                {
                    message
                        ? <Text style={styles.txt}>{'Message'}</Text>
                        : <></>
                }
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableStyle} onPress={() => profilePress()}>
                <Image source={{ uri: 'https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg' }} style={styles.image2} />
                {
                    profile
                        ? <Text style={styles.txt}>{'Profile'}</Text>
                        : <></>
                }
            </TouchableOpacity>
        </View>
    )
}

export default CustomBottomTab;

const styles = StyleSheet.create({
    mainView: {
        height: 80,
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 15,
    },
    txt: {
        fontSize: 16,
        color: '#D81B60',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingLeft: 10,
    },
    image: {
        height: 25,
        width: 25,
    },
    image2: {
        height: 30,
        width: 30,
        borderRadius: 50,
    },
    touchableStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    }
})
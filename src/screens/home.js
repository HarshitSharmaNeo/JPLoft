import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import CustomBottomTab from '../navigation/bottomTab/customBottomTab';
import axios from 'axios';

const Home = () => {

    const baseUrl = 'https://gorest.co.in/public/v1';
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = async () => {
        const url = `${baseUrl}/users`;
        const response = await axios.get(url);
        setData(response?.data?.data);
    };

    return (
        <View style={styles.mainView}>
            <View style={styles.container}>
                <View style={styles.static}>
                    <View style={styles.imageView}>
                        <Image source={{ uri: 'https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg' }}
                            style={styles.image} />
                    </View>
                    <Text style={styles.txt2}>{data[3]?.name}</Text>
                    <Text style={styles.txt1}>{'Gwalior, India'}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.txt1}>{'Religon: '}</Text>
                        <Text style={styles.txt}>{'Hindu'}</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonLong}>
                        <Text style={styles.txt3}>{'My Visitors'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.dynamic}>
                    <FlatList
                        style={{
                            marginBottom: 150
                        }}
                        data={data}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        pagingEnabled={true}
                        renderItem={({ item }) => (
                            <>
                                <View style={styles.imageView}>
                                    <Image source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' }}
                                        style={styles.image} />
                                </View>
                                <Text style={[styles.txt2, {
                                    maxWidth: '78%',
                                    maxHeight: 80,
                                }]}>{item?.name ?? ''}</Text>
                                <Text style={styles.txt1}>{'Gwalior, India'}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.txt1}>{'Religon: '}</Text>
                                    <Text style={styles.txt}>{'Hindu'}</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly',
                                }}>
                                    <TouchableOpacity style={[styles.buttonLong, { width: '25%' }]}>
                                        <Image source={{ uri: 'https://img.icons8.com/material-outlined/344/like--v1.png' }}
                                            style={styles.image1} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.buttonLong, { width: '25%' }]}>
                                        <Image source={{ uri: 'https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/344/external-chat-communication-royyan-wijaya-detailed-outline-royyan-wijaya-4.png' }}
                                            style={styles.image1} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.buttonLong, { width: '25%' }]}>
                                        <Image source={{ uri: 'https://img.icons8.com/material-rounded/344/download--v1.png' }}
                                            style={styles.image1} />
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    />
                </View>
            </View>
            <View style={styles.likeView}>
                <Image source={require('../assets/like.png')}
                    style={styles.image2} />
                <Text style={styles.txt4}>{'70%'}</Text>
            </View>
            <View style={styles.bottomTab}>
                <CustomBottomTab />
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'pink',
    },
    txt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#D81B60',
    },
    txt1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'grey',
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    txt2: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
    },
    txt3: {
        fontSize: 14,
        fontWeight: '700',
        color: 'white',
    },
    bottomTab: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    container: {
        flex: .5,
        flexDirection: 'row',
        marginHorizontal: 15,
        justifyContent: 'space-between',
    },
    static: {
        height: 500,
    },
    dynamic: {
        height: 500,
        width: '49%',
        marginTop: 25,
    },
    image: {
        height: 160,
        width: 160,
        borderRadius: 25,
    },
    image1: {
        height: 20,
        width: 20,
        tintColor: 'white',
    },
    image2: {
        height: 70,
        width: 70,
        tintColor: '#EC407A',
        marginTop: 70,
    },
    likeView: {
        marginTop: -7 * 100,
        alignSelf: 'center',
    },
    txt4: {
        fontSize: 15,
        fontWeight: '700',
        color: 'white',
        position: 'absolute',
        top: 93,
        left: 20,
    },
    imageView: {
        backgroundColor: 'white',
        height: 170,
        width: 170,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLong: {
        backgroundColor: '#EC407A',
        height: 40,
        width: '80%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 25,
    },
})
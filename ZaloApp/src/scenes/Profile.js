import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Animated, TouchableOpacity, StatusBar, AlertIOS, Platform, Image, ListView } from 'react-native'
import { Button, Icon } from 'native-base';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
import BaseComponent from '../components/BaseComponent';
import MyStatusBar from '../components/MyStatusBar';
import ImagePicker from 'react-native-image-picker';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const WIDTH_AVATAR = 50;
const MARGIN_LEFT_BOTTOM_AVARTAR = 20;
const MARGIN_TOP_AVATAR = HEADER_MAX_HEIGHT - (WIDTH_AVATAR + MARGIN_LEFT_BOTTOM_AVARTAR);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
export default class Profile extends BaseComponent {

    _data = {};

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            scrollY: new Animated.Value(
                // iOS has negative initial scroll value because content inset...
                Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
            ),
            refreshing: false,
        };

        // this.renderRow = this.renderRow.bind(this);

        // const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this._data = {
            dataSource: [
                { Title: "Title 1", Content: 'row 1' },
                { Title: "Title 1", Content: 'row 1' },
                { Title: "Title 2", Content: 'row 2' },
                { Title: "Holidays 30/4 - 1/5", Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut venenatis felis. Donec at tempus neque. Morbi vitae sem et nisi porta ornare. Cras at venenatis tellus. Curabitur consequat lacinia lacus, et luctus tortor dignissim nec. Suspendisse scelerisque aliquet vehicula. Integer at ante elit.' },
                { Title: 'Birthday 6/5', Content: 'Suspendisse potenti. Proin varius risus ac venenatis elementum. Morbi fringilla ante et nibh accumsan, ultricies tempor est porta. Nunc molestie neque a efficitur posuere. Nunc egestas, massa vitae hendrerit feugiat, ligula sem ullamcorper ante, quis ultricies quam turpis ac lectus. Praesent luctus, sapien imperdiet sagittis iaculis, nibh lacus convallis velit, sed placerat enim justo ornare tortor. Phasellus sed dui id odio lobortis imperdiet. Duis sollicitudin tellus sed eros commodo ultrices. Donec auctor nunc id quam suscipit, tempus tincidunt elit placerat. Sed nec odio vel ligula maximus varius. Nullam vulputate augue non gravida lacinia. Nam ac lobortis libero, id sollicitudin nulla.' }],
        };
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    renderRow(rowData, section, row) {
        const total = this._data.dataSource.length;
        const topLineStyle = styles.topLine;
        const bottomLineStyle = row == total - 1 ? [styles.bottomLine, styles.hiddenLine] : styles.bottomLine;

        if (row == 0)
            return (<View key={row} style={styles.row}>
                <View style={styles.timeline}>
                    <View style={styles.bigDot} />
                    <View style={styles.dot} />
                    <View style={styles.line}>
                        <View style={topLineStyle} />
                        <View style={bottomLineStyle} />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.eventDate}>Moments</Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 8 }}>
                        <Button style={{ marginBottom: 8 }}
                            bordered>
                            <Icon name='add' />
                        </Button>
                        <Text style={{ marginLeft: 20, marginRight: 20 }}>Share wonderful moments in life with your friends</Text>
                    </View>
                </View>
            </View>);
        else
            return (<View key={row} style={styles.row}>
                <View style={styles.timeline}>
                    <View style={styles.bigDot} />
                    <View style={styles.dot} />
                    <View style={styles.line}>
                        <View style={topLineStyle} />
                        <View style={bottomLineStyle} />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.eventDate}>{rowData.Title}</Text>
                    <Text style={{ marginTop: 8 }}>{rowData.Content}</Text>
                    <Text></Text>
                </View>
            </View>);
    }


    _renderScrollViewContent() {
        const data = this._data.dataSource;
        let i = 0;
        console.log("Test : ")
        return (
            <View style={styles.scrollViewContent}>
                {data.map((item) => {
                    i++;
                    return this.renderRow(item, 0, i - 1);
                })}
            </View>
        )
    }

    renderContent() {
        const remote = 'https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&h=350';
        const resizeMode = 'cover';
        const text = 'I am some centered text';
        const scrollY = Animated.add(
            this.state.scrollY,
            Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
        );
        const headerTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp',
        });
        const imageTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: 'clamp',
        });
        const imageOpacity = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });
        const asd = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        const avatarTranslateY = asd.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -HEADER_SCROLL_DISTANCE + WIDTH_AVATAR / 2 + MARGIN_LEFT_BOTTOM_AVARTAR - HEADER_MIN_HEIGHT / 2 + STATUSBAR_HEIGHT / 2],
            extrapolate: 'clamp',
        });
        const avatarTranslateX = asd.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0, WIDTH_AVATAR / 2],
            extrapolate: 'clamp',
        });

        const titleTranslateX = asd.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0, 0.5 * WIDTH_AVATAR],
            extrapolate: 'clamp',
        });
        const avatarBorderRadius = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [WIDTH_AVATAR / 2, WIDTH_AVATAR * 0.8 / 2],
            extrapolate: 'clamp',
        });
        const avatarScale = asd.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.8],
            extrapolate: 'clamp',
        });
        return (
            <View
                style={{ flex: 1 }}>
                <StatusBar
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(0, 0, 0, 0.251)"
                />
                {/* <MyStatusBar backgroundColor="#006FFD" barStyle="light-content" opacity={0.5} /> */}
                <Animated.ScrollView
                    style={styles.fill}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                        { useNativeDriver: true },
                    )}
                    contentInset={{
                        top: HEADER_MAX_HEIGHT,
                    }}
                    contentOffset={{
                        y: -HEADER_MAX_HEIGHT,
                    }}
                >
                    {this._renderScrollViewContent()}
                </Animated.ScrollView>
                <Animated.View style={[styles.header, {
                    transform: [{
                        translateY: headerTranslate
                    }]
                }]}
                >
                    <Animated.Image style={[styles.backgroundImage, {
                        opacity: imageOpacity,
                        transform: [{ translateY: imageTranslate }],
                    }
                    ]}
                        source={{ uri: remote }} />
                </Animated.View>
                <Animated.View
                    style={[styles.avatar, {
                        transform: [
                            {
                                translateY: avatarTranslateY
                            },
                            {
                                translateX: avatarTranslateX
                            }
                        ]
                    }
                    ]}
                >
                    <Animated.Image style={[styles.avatarImage, 
                    // { borderRadius: avatarBorderRadius },
                    {
                        transform: [
                            { scale: avatarScale },
                        ]

                    }]}
                        source={{ uri: 'https://reactjs.org/logo-og.png' }} />
                </Animated.View>
                <Animated.View
                    style={[
                        styles.bar,
                        {
                            transform: [
                                { translateY: avatarTranslateY },
                                { translateX: titleTranslateX },
                            ],
                        },
                    ]}
                >
                    <Text style={styles.title}>Kris Nguyễn</Text>
                </Animated.View>
                <View style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: HEADER_MIN_HEIGHT - STATUSBAR_HEIGHT, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'transparent', margin: 15, marginTop: STATUSBAR_HEIGHT,
                }}>

                    <TouchableOpacity
                        onPress={() => this.goBack()}>
                        <Icon name='arrow-back'
                            style={{ fontSize: 26, color: 'white' }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='more'
                            style={{ fontSize: 26, color: 'white' }} />
                    </TouchableOpacity>
                </View>
            </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollViewContent: {
        // iOS uses content inset, which acts like padding.
        paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
    },
    avatar: {
        backgroundColor: 'transparent',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: MARGIN_TOP_AVATAR,
        left: MARGIN_LEFT_BOTTOM_AVARTAR,
        width: WIDTH_AVATAR,
        height: WIDTH_AVATAR,
        overflow: 'hidden'

    },
    bar: {
        backgroundColor: 'transparent',
        height: WIDTH_AVATAR,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: MARGIN_TOP_AVATAR,
        left: 1.5 * WIDTH_AVATAR,
        right: 0,
    },
    title: {
        color: 'white',
        fontSize: 15,
    },
    listView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    row: {
        padding: 2,
        paddingLeft: 12,
    },
    content: {
        marginLeft: 40,
        marginRight: 20
    },
    timeline: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: 40,
        justifyContent: 'flex-start', // center the dot
        alignItems: 'center',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: HEADER_MAX_HEIGHT,
        backgroundColor: '#03A9F4',
        overflow: 'hidden'
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    avatarImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius:25,
        resizeMode: 'cover',
    },
    line: {
        position: 'absolute',
        top: 0,
        width: 4,
        bottom: 0,
        alignItems: 'center',
    },
    topLine: {
        flex: 1,
        width: 1,
        backgroundColor: 'black',
    },
    bottomLine: {
        flex: 1,
        width: 1,
        backgroundColor: 'black',
    },
    hiddenLine: {
        width: 0,
    },
    bigDot: {
        width: 32,
        height: 32,
        borderRadius: 30,
        backgroundColor: 'black',
    },
    dot: {
        marginTop: 8,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'black',
    },
    eventDate: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold'
    },
});


import { View, Text, Pressable, StyleSheet, Image } from 'react-native';

function pressHandler() {
    console.log('pressed')
}

function DoctorInfo({ name, hospital, address, onPress }) {

    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                android_ripple={{ color: '#111111' }}
            >
                <View style={styles.insideContainer}>
                    <Image style={styles.resim} source={require('../assets/images/doctorimg.png')} />
                    <View style={styles.info}>
                        <Text>{name}</Text>
                        <Text>{hospital}</Text>
                        <Text>{address}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default DoctorInfo;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#255280',
        borderRadius: 4,
        padding: 5,
        elevation: 3,
        width: 330,
        height: 130,
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center'
    },
    insideContainer: {
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    resim: {
        height: '90%',
        width: '30%',
        margin: 5
    },
    info: {
        width: '70%',
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center'
    },
});
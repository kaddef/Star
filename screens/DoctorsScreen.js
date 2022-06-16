import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import DoctorInfo from '../Components/DoctorInfo';
import { postDoktorlar, fetchDoktorlar } from '../util/http';
import { useEffect, useState } from 'react';
import { Button } from "react-native-web";

const DUMMY_DOC = [
    {
        id: 'e6',
        name: 'deneme',
        hospital: 'hastane dum',
        address: 'adresdum',
        latitude: '32',
        longitude: '11',
    }
];


function DoctorsScreen({ navigation }) {

    const [fetchedDoktorlar, setFetchedDoktorlar] = useState([]);

    const [coordinates, setCoordinates] = useState({});

    useEffect(() => {
        async function getDoktorlar() {
            const doktorlar = await fetchDoktorlar();
            setFetchedDoktorlar(doktorlar);

        }

        getDoktorlar();
    }, []);

    function displaydoc() {
        return fetchedDoktorlar.map((item) => {

            return (
                <DoctorInfo key={item.id} name={item.name} hospital={item.hospital} address={item.address} onPress={() => pressHandler(item.lat, item.lng, item.name)} />
            );
        });
    }


    function pressHandler(latitude, longitude, name) {
        console.log(latitude, longitude, "asdasdasd", name);
        /*postDoktorlar(DUMMY_DOC[0])*/
        const templat = latitude;
        const templng = longitude;
        navigation.navigate('Harita', {
            lat: templat,
            lng: templng
        });
    }

    return (

        <View style={styles.container}>
            {/* <View style={styles.navigation}></View> */}
            <ScrollView>
                {displaydoc()}
            </ScrollView>
        </View>
    );
}

export default DoctorsScreen;

const styles = StyleSheet.create({
    navigation: {
        marginTop: 10,
        marginBottom: 20,
        height: 50,
        width: '100%',
        backgroundColor: '#ffffff'
    },
    container: {
        paddingVertical: 30,
        flex: 1,
        backgroundColor: '#123456',
        alignItems: 'center'
    },
});
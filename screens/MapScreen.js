import { useState } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";

function MapScreen() {

    const [selectedLocation, setSelectedLocation] = useState();

    const region = {
        latitude: 41.008530509426826,
        longitude: 28.980021017427504,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    function selectLocationHandler(event) {
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;
        setSelectedLocation({ lat: lat, lng: lng });
    }

    return <MapView style={styles.map} initialRegion={region} onPress={selectLocationHandler}>
        {selectedLocation && <Marker title = "Picked Location" coordinate={{ latitude: selectedLocation.lat, longitude: selectedLocation.lng }} />}
    </MapView>

}

export default MapScreen;

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});
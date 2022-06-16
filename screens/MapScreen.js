import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";

function MapScreen({ route }) {


    const [selectedLocation, setSelectedLocation] = useState();

    const [coords, setCoords] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });
    useEffect(() => {
        setCoords({
            latitude: route.params.lat,
            longitude: route.params.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        })
      },[]);
    
    

    function selectLocationHandler(event) {
        const lat = event.nativeEvent.coordinate.latitude2;
        const lng = event.nativeEvent.coordinate.longitude2;
        setSelectedLocation({ lat: lat, lng: lng });
    }

    return <MapView style={styles.map} initialRegion={coords} onPress={selectLocationHandler}>
        {selectedLocation && <Marker title="Picked Location" coordinate={{ latitude: selectedLocation.lat, longitude: selectedLocation.lng }} />}
    </MapView>

}

export default MapScreen;

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});
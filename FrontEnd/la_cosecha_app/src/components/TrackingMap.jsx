import React, { useEffect, useState } from "react";
import * as Location from "expo-location"
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {GOOGLE_MAPS_KEY} from "@env";
import theme from "../theme";

const image=require('../../assets/images/rect3637.png')

const TrackingMap =()=>{
    const [origin,setOrigin]=useState({
        latitude:8.248420, 
        longitude: -73.354768,
    })
    const [destination,setDestination]=useState({
        latitude:8.234495, 
        longitude: -73.361851,
    })

    useEffect(()=>{
        getLocationPermission();
    },[])

    const getLocationPermission=async()=>{
        let {status}=await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted'){
            alert('Permiso denegado')
        }

        let location=await Location.getCurrentPositionAsync({});
        const current={
            latitude: location.coords.latitude,
            longitude :location.coords.longitude
        }
        setDestination(current)
    }
    const mapJson=[
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#263c3f"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#6b9a76"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#38414e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#212a37"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9ca5b3"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#1f2835"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#f3d19c"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2f3948"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#515c6d"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        }
      ]

    return(
        <View>
            <MapView style={{width:'100%',height:'100%'}}
                initialRegion={{
                    latitude:origin.latitude,
                    longitude:origin.longitude,
                    latitudeDelta:0.01,
                    longitudeDelta:0.025
                }}
                customMapStyle={mapJson}
            >
                <Marker
                    coordinate={origin}
                    image={image}
                />
                <Marker
                    coordinate={destination}
                />
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_KEY}
                    strokeColor={theme.colors.primary}
                    strokeWidth={6}
                />
            </MapView>
        </View>
    )
}

export default TrackingMap
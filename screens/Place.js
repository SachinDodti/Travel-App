import React from 'react';
import {
    View,
    Text,
    ImageBackground
} from 'react-native';


const Place = ({navigation, route}) => {

    console.warn(navigation)
   const [selectedPlace, setSelectedPlace] = React.useState(null)
    React.useEffect(()=>{
        let {selectedPlace} = route.params;
        setSelectedPlace(selectedPlace)
    },[])

    function renderPlace(){
        return(
            <ImageBackground
             source={selectedPlace?.image}
             style={{
                 width:'100%',
                 height:'100%'
             }}
            >
            </ImageBackground>
        )
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           {renderPlace()}
        </View>
    )
}

export default Place;
import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import LiquidApp from '../components/liquidApp';


class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 38.773903,
            lng: -119.689944
        },
        zoom: 7,
        createMapOptions:

            function (maps) {
                return {
                    styles: [
                        {
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "stylers": [
                                {
                                    "visibility": "off"
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
                            "featureType": "road.arterial",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },]
                }
            }
    };
    state = {
        value: [
            [40.718009, -122.413017, 'Lake Shasta'],
            [40.980881, -122.679359, 'Trinity Lake'],
            [39.578921, -121.451787, 'Lake Oroville'],
            [38.003366, -120.532937, 'New Melones Lake'],
            [37.063187, -121.112429, 'San Luis Reservoir'],
            [37.013276, -119.689944, 'Millerton Lake'],
            [33.861095, -117.176748, 'Lake Perris'],
            [34.530384, -118.604451, 'Castaic Lake'],
            [36.864682, -119.285495, 'Pine Flat Reservoir'],
            [37.617241, -120.265917, 'Lake McClure'],
            [37.744484, -120.383473, 'Don Pedro Reservoir'],
            [38.773903, -121.119819, 'Folsom Lake']
        ]
    };


    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{height: '100vh', width: '100%', display: 'inline-block'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyBlA3u-3jXkbhfqu5KPWSpH0IgqfYY6xkg'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options={this.props.createMapOptions}
                >
                    {
                        this.state.value.map(function (val, index) {
                            return <LiquidApp key={index}
                                              lat={val[0]}
                                              lng={val[1]}
                                              name={val[2]}
                            />
                        })
                    }
                </GoogleMapReact>

            </div>
        );
    }
}

export default SimpleMap;
import { faBed, faBedPulse, faChartBar, faPerson, faPrescriptionBottleAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import loadingGif from "../assets/gif/loading.gif";
import notFound from "../assets/not-found.jpg";
import Card from "./Card";

export default function Info() {
    const url = "https://disease.sh/v3/covid-19/countries/nepal?strict=true";
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
                setError(false);
            }
            )
            .catch(err => {
                setLoading(false);
                setError(true);
            });
    }, []);

    return (
        <View style={styles.infoList}>
            {loading &&
                <View style={styles.loadingImage}>
                    <Image source={loadingGif} />
                    <Text style={{ fontSize: 30, }}>Loading Covid Data..</Text>
                    <Text style={{ fontSize: 15, }}>Please hold your horses</Text>
                </View>

            }
            {error &&
                <View style={styles.errorImage}>
                    <Image source={loadingGif} />
                    <Text style={{ fontSize: 30, }}>Error retriving data</Text>
                    <Text style={{ fontSize: 15, }}>Please try again later</Text>
                </View>
            }

            {
                data.message ?
                    <View style={styles.loadingImage}>
                        <Image source={notFound} />
                        <Text style={{ fontSize: 30, }}>Failed to load data</Text>
                        <Text style={{ fontSize: 15, }}>Please check your internet connection</Text>
                    </View>
                    :
                    <ScrollView style={{ marginBottom: '30%' }}>
                        {/* Infected Today */}
                        <Card title="Infected Today" value={data.todayCases} icon="ios-calendar-outline" />
                        {/* Deaths Today */}
                        <Card title="Deaths Today" value={data.todayDeaths} icon="ios-bed-outline" />
                        {/* Recovered Today */}
                        <Card title="Recovered Today" value={data.todayRecovered} icon="ios-man-outline" />
                        {/* Active Cases */}
                        <Card title="Active Cases" value={data.active} icon="ios-medkit-outline" />
                        {/* Total Cases */}
                        <Card title="Total Cases" value={data.cases} icon="ios-bar-chart-outline" />
                    </ScrollView>
            }
        </View>
    );
}
const styles = StyleSheet.create({
    infoList: {
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '5%',
    },
    info: {
        marginVertical: 8,
        paddingVertical: 30,
        paddingHorizontal: 30,
        borderWidth: 0.2,
        width: '85%',
        borderRadius: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    infoTitle: {
        fontSize: 25,
        paddingLeft: 22,
    },
    infoValue: {
        fontSize: 25,
        color: 'teal',
        fontWeight: 'bold',
        marginLeft: 5
    },
    loadingImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    errorImage: {
        backgroundColor: 'white',
        marginTop: 100,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    }
});
import { faBed, faBedPulse, faChartBar, faPerson, faPrescriptionBottleAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import loadingGif from "../assets/gif/loading.gif";
import notFound from "../assets/not-found.jpg";

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
                    <View>
                        {/* Infected Today */}
                        <View style={styles.info}>
                            <FontAwesomeIcon color="teal" size="25" icon={faChartBar} />
                            <Text style={styles.infoTitle}>
                                Infected Today:
                            </Text>
                            <Text style={styles.infoValue}>
                                {data.todayCases}
                            </Text>
                        </View>
                        {/* Deaths Today */}
                        <View style={styles.info}>
                            <FontAwesomeIcon color="teal" size="25" icon={faBed} />
                            <Text style={styles.infoTitle}>
                                Deaths Today:
                            </Text>
                            <Text style={styles.infoValue}>
                                {data.todayDeaths}
                            </Text>
                        </View>
                        {/* Recovered Today */}
                        <View style={styles.info}>
                            <FontAwesomeIcon color="teal" size="25" icon={faPerson} />
                            <Text style={styles.infoTitle}>
                                Recovered Today:
                            </Text>
                            <Text style={styles.infoValue}>
                                {data.todayRecovered}
                            </Text>
                        </View>
                        {/* Active Cases */}
                        <View style={styles.info}>
                            <FontAwesomeIcon color="teal" size="25" icon={faBedPulse} />
                            <Text style={styles.infoTitle}>
                                Active Cases:
                            </Text>
                            <Text style={styles.infoValue}>
                                {data.active}
                            </Text>
                        </View>
                        {/* Total Cases */}
                        <View style={styles.info}>
                            <FontAwesomeIcon color="teal" size="25" icon={faPrescriptionBottleAlt} />
                            <Text style={styles.infoTitle}>
                                Total Cases:
                            </Text>
                            <Text style={styles.infoValue}>
                                {data.cases}
                            </Text>
                        </View>
                    </View>
            }
        </View>
    );
}
const styles = StyleSheet.create({
    infoList: {
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '15%',
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
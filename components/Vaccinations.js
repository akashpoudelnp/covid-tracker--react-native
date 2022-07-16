import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Linking, ScrollView, Image } from "react-native";
import { DataTable } from 'react-native-paper';
import loadingGif from "../assets/gif/loading.gif";
import notFound from "../assets/not-found.jpg";
export default function Vaccinations({ navigation }) {
    const url = "https://disease.sh/v3/covid-19/vaccine/coverage/countries/NP?lastdays=30&fullData=false";
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(record => {
                setData(record.timeline);
                setLoading(false)
                setError(false)
            })
            .catch(err => {
                setLoading(false);
                setError(true);
            })
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.infoWrapper}>
                <Text style={styles.title}>Vaccination Records</Text>
                <Text style={{ fontSize: 10, fontStyle: "italic" }}>Showing records of last 30 days</Text>
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

                {!data &&
                    <View style={styles.loadingImage}>
                        <Image style={{ marginTop: 50, }} source={notFound} />
                        <Text style={{ fontSize: 30, }}>Failed to load data</Text>
                        <Text style={{ fontSize: 15, }}>Please check your internet connection</Text>
                    </View>
                }

                <DataTable style={{ marginTop: 20, marginBottom: 200 }} >
                    <DataTable.Header >
                        <DataTable.Title>Date</DataTable.Title>
                        <DataTable.Title>Vaccinations</DataTable.Title>
                    </DataTable.Header>

                    <ScrollView >
                        {data && Object.entries(data).map(([key, value]) => (
                            < DataTable.Row >
                                <DataTable.Cell>{key}</DataTable.Cell>
                                <DataTable.Cell>{value}</DataTable.Cell>
                            </DataTable.Row>
                        ))}
                    </ScrollView>


                </DataTable>

            </View>

        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    infoWrapper: {
        marginTop: "10%",
        padding: '5%',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    loadingImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    errorImage: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    }

});
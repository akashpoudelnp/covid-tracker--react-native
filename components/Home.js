import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Info from "./Info";

export default function Home({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const url = "https://www.akashpoudel.com.np/nepalidate.php?api=true";
    const [date, setDate] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDate(data);
                setLoading(false);
                setError(false);
            })
            .catch(error => {
                setError(true);
                setLoading(false);
            })
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.infoWrapper}>
                <Text style={styles.title}>Today's Cases</Text>
                <Text style={{ color: 'teal', fontSize: 20, }}>
                    {loading && 'X-X-X'}
                    {error && 'X-X-X'}
                    {date.Day && date.Month + ' ' + date.Day + ', ' + date.Year + ' '}
                </Text>
                <Text style={{ fontSize: 10, fontStyle: "italic" }}>Updated every 24 hours from MOHP Nepal</Text>
                <Info />
            </View>
        </View>
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

});
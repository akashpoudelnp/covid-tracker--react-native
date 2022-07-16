import { View, Text, StyleSheet, Image, Linking } from "react-native";
import akash from "../assets/akash.png";
export default function About({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.infoWrapper}>
                <Text style={styles.title}>About</Text>
                <Text style={{ paddingTop: 10, }}>This is an application developed using react native that gives the information of COVID cases</Text>
                <View style={styles.aboutCard}>
                    <Image style={styles.aboutImage} source={akash} />
                    <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold", }}>Aakash Poudel</Text>
                    <Text onPress={() => Linking.openURL('http://akashpoudel.com.np')} style={{ color: 'teal' }}>www.akashpoudel.com.np</Text>
                </View>
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
    aboutCard: {
        marginTop: 50,
        flexDirection: "column",
        alignItems: "center",
    },
    aboutImage: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: "#bfbfbf",
        padding: 20,
    }
});
import { View, Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Card(props) {
    return (
        <View style={styles.info}>
            <Ionicons name={props.icon} size={25} color={'teal'} />
            <Text style={styles.infoTitle}>
                {props.title}:
            </Text>
            <Text style={styles.infoValue}>
                {props.value}
            </Text>
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
});

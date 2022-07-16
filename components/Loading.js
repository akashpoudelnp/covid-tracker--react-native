import { Image, StyleSheet, View } from "react-native";
import loadingGif from "../assets/gif/loading.gif";
export default Loading = () => {
    return (
        <View style={styles.loading}>
            <Image source={loadingGif} />
        </View>
    );
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}
);
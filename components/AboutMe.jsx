import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSelector } from "react-redux";

export default function AboutMe() {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={require("../assets/me.png")} />
            <Text style={styles.name}>Lautaro Zarandón</Text>
            <Text style={styles.nickname}>Zeta</Text>
            <Text style={styles.text}>Based in Mendoza, AR</Text>
            <Text style={styles.email}>zarandonlautaro@gmail.com</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    name: {
        fontSize: 36,
        fontWeight: "bold",
    },
    nickname: {
        fontSize: 36,
    },
    text: {
        fontSize: 18,
    },
    email: {
        fontSize: 18,
        color: "#AD8B8B",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    avatar: {
        width: 128,
        height: 128,
        borderRadius: 64,
    },
});

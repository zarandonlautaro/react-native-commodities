import { useState } from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";

export default function Commoditie({ item, index }) {
    const [visible, setvisible] = useState(false);

    return (
        <TouchableHighlight
            style={styles.item}
            onPress={() => setvisible(!visible)}
        >
            <View>
                <View style={{ backgroundColor: "#DCDBDB", padding: 5 }}>
                    <Text style={styles.title}>
                        Commoditie {index} - {item?.fields.commodity}
                    </Text>
                </View>
                {visible && (
                    <View>
                        <View style={styles.row}>
                            <Text>Year</Text>
                            <Text>Price</Text>
                        </View>
                        <View style={styles.row}>
                            <Text>{item?.fields.date.slice(0, 4)}</Text>
                            <Text>
                                {item?.fields.price_index.toLocaleString(
                                    "en-US",
                                    {
                                        style: "currency",
                                        currency: "USD",
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0,
                                    },
                                )}
                            </Text>
                        </View>
                    </View>
                )}
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "400",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginHorizontal: "20%",
    },
});

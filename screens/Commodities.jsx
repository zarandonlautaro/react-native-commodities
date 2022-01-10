import { StyleSheet, Text, View, FlatList } from "react-native";
import Commoditie from "../components/Commoditie";
import DatePicker from "../components/DatePicker";
import useCommodities from "../hooks/useCommodities";

import { handleFinishYear, handleInitialYear } from "../store/actions/dates";

export default function Commodities() {
    const commodities = useCommodities();

    const renderItem = ({ item, index }) => {
        return <Commoditie item={item} index={index + 1} />;
    };

    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.title}>Commodity Price</Text>
                <Text style={styles.subtitle}>Period</Text>
                <View style={styles.dates}>
                    <View style={styles.centerRow}>
                        <Text style={styles.text}>Start</Text>
                        <DatePicker handleYear={handleInitialYear} />
                    </View>
                    <View style={styles.centerRow}>
                        <Text style={styles.text}>End</Text>
                        <DatePicker handleYear={handleFinishYear} />
                    </View>
                </View>
            </View>
            <FlatList
                data={commodities}
                renderItem={renderItem}
                keyExtractor={(item) => item.recordid}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dates: { minWidth: "25%" },
    center: { alignItems: "center", justifyContent: "center" },
    centerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
    },
    text: {
        fontSize: 18,
    },
});

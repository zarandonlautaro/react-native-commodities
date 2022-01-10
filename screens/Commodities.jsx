import { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    FlatList,
    ScrollView,
    Touchable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "../components/DatePicker";
import {
    handleFinishYear,
    handleInitialYear,
    getCommodities,
} from "../store/actions/dates";

export default function Commodities() {
    const dispatch = useDispatch();
    const commodities = useSelector((state) => state.dates.commodities);
    const dates = useSelector((state) => state.dates);
    const { initialYear, finishYear } = dates;

    useEffect(() => {
        dispatch(getCommodities(initialYear, finishYear));
    }, [initialYear, finishYear]);

    const Item = ({ item, index }) => {
        const [visible, setvisible] = useState(false);
        return (
            <TouchableHighlight
                style={styles.item}
                onPress={() => setvisible(!visible)}
            >
                <View>
                    <View style={{ backgroundColor: "#DCDBDB", padding: 5 }}>
                        <Text>
                            Commoditie {index} - {item?.fields.commodity}
                        </Text>
                    </View>
                    {visible && (
                        <View>
                            <Text>Year: {item?.fields.date.slice(0, 4)}</Text>
                            <Text>
                                Price:
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
                    )}
                </View>
            </TouchableHighlight>
        );
    };

    const renderItem = ({ item, index }) => {
        return <Item item={item} index={index + 1} />;
    };

    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.title}>Commodity Price</Text>
                <Text style={styles.subtitle}>Period</Text>
                <View
                    style={{
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text style={styles.text}>Start</Text>
                        <DatePicker handleYear={handleInitialYear} />
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignContent: "center",
                            alignItems: "center",
                        }}
                    >
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
    center: { alignItems: "center", justifyContent: "center" },
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

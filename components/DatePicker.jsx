import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

export default function DatePicker({ handleYear }) {
    const dispatch = useDispatch();
    const maximumDate = new Date("2016/12/31");
    const [date, setDate] = useState(maximumDate);
    const [show, setShow] = useState(false);

    const onSelectDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "ios");
        setDate(currentDate);
        dispatch(handleYear(new Date(currentDate).getFullYear()));
    };

    const showDatePicker = () => {
        setShow(true);
    };

    return (
        <>
            <TouchableHighlight onPress={showDatePicker} style={styles.border}>
                <Text style={styles.text}>{new Date(date).getFullYear()}</Text>
            </TouchableHighlight>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    onChange={onSelectDate}
                    maximumDate={maximumDate}
                />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
    },
    border: {
        borderWidth: 1,
        borderColor: "#000",
    },
});

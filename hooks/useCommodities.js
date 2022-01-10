import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommodities } from "../store/actions/dates";

export default function useCommodities() {
    const dispatch = useDispatch();

    const dates = useSelector((state) => state.dates);
    const commodities = useSelector((state) => state.dates.commodities);

    const { initialYear, finishYear } = dates;

    useEffect(() => {
        dispatch(getCommodities(initialYear, finishYear));
    }, [initialYear, finishYear]);

    return commodities;
}

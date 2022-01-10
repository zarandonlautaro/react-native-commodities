import axios from "axios";
import {
    SET_INITIAL_YEAR,
    SET_FINISH_YEAR,
    GET_COMMODITIES,
    COMMODITIES_ERROR,
} from "../constants";

export function handleInitialYear(year) {
    return {
        type: SET_INITIAL_YEAR,
        payload: year,
    };
}

export function handleFinishYear(year) {
    return {
        type: SET_FINISH_YEAR,
        payload: year,
    };
}

export const getCommodities = (initialYear, finishYear) => async (dispatch) => {
    try {
        const URLS_YEARS = getArrayOfYears(initialYear, finishYear);
        const data = await getAllData(URLS_YEARS);
        console.log("allDataaaaaa", data.length, data[0], data[1]);
        let res = [];
        data.forEach((curSet) => {
            res = [...res, ...curSet];
        });
        dispatch({
            type: GET_COMMODITIES,
            payload: res,
        });
    } catch (e) {
        dispatch({
            type: COMMODITIES_ERROR,
            payload: console.log(e),
        });
    }
};

async function getAllData(URLs) {
    return await Promise.all(URLs.map(fetchData));
}

async function fetchData(URL) {
    return await axios
        .get(URL)
        .then(function (response) {
            return response.data.records;
        })
        .catch(function (error) {
            return { success: false };
        });
}

const getArrayOfYears = function (startDate, finishDate) {
    let arrayOfYears = [];

    // Order the years
    if (finishDate > startDate) {
        let tmp = finishDate;
        finishDate = startDate;
        startDate = tmp;
    }

    // Loop them
    let dif = startDate - finishDate;
    for (let i = 0; i <= dif; i++) {
        arrayOfYears[
            arrayOfYears.length
        ] = `https://data.opendatasoft.com/api/records/1.0/search/?dataset=commodity-prices%40public&q=&facet=date&facet=commodity&refine.date=${
            startDate - i
        }`;
    }

    return arrayOfYears;
};

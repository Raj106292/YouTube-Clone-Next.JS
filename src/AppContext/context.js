/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { fetchDataFromApi } from '@/utils/api';
import { createContext, useEffect, useState } from 'react';

const Context = createContext();

const AppContext = (props) => {
    const [selectedCat, setSelectedCat] = useState("New");

    useEffect(() => {
        fetData(`search/?q=${selectedCat}`)
    }, [])

    const fetData = (url) => {
        fetchDataFromApi(url).then((res) => {
            console.log("my data", res);
            setSelectedCat(res);
        })
    }

    const value = {
        selectedCat,
        setSelectedCat,
        fetData
    }

    return(
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}

export default AppContext;
"use client"
import { fetchDataFromApi } from '@/utils/api';
import { createContext, useEffect, useState } from 'react';

const Context = createContext();

const AppContext = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetData('search/?q=New')
    }, [data])

    const fetData = async(url) => {
        const data = await fetchDataFromApi(url);
        console.log("my data", data);
    }

    const value = {
        data,
        setData
    }

    return(
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}

export default AppContext;
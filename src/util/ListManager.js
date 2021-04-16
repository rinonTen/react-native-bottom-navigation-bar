import AsyncStorage from '@react-native-community/async-storage'
import "react-native-get-random-values";
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react'


const updateCurrentList = (list) => {
    AsyncStorage.setItem("@@GrocerList/currentList", JSON.stringify(list))
}


export const useCurrentList = () => {

    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)

    const addItem = (text) => {
        const newList = [{ id: uuid(), name: text }, ...list]
        setList(newList)
        updateCurrentList(newList)

    }
    const removeItem = (id) => {
        const newList = list.filter(item => item.id !== id)
        setList(newList)
        updateCurrentList(newList)
    }

    useEffect(() => {

        setTimeout(() => {
            AsyncStorage.getItem('@@GrocerList/currentList')
                .then(data => JSON.parse(data))
                .then(data => {
                    if (data) {
                        setList(data)
                    }

                    setLoading(false)
                })
        }, 2000)
    }, [])


    return {
        list,
        loading,
        addItem,
        removeItem

    }


}
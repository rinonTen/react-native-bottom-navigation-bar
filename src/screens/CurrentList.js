import React, { useEffect, useState } from 'react'

import { View, Text, SafeAreaView, ScrollView, FlatList, KeyboardAvoidingView, ActivityIndicator } from 'react-native'

import ListItem, { Separator } from '../components/ListItem'
import AddItem from '../components/AddItem'
import { useCurrentList } from '../util/ListManager';


// const updateCurrentList = (list) => {
//     AsyncStorage.setItem("@@GrocerList/currentList", JSON.stringify(list))
// }

export default () => {
    const { list,
        loading,
        addItem,
        removeItem } = useCurrentList()


    // const [list, setList] = useState([])
    // const [loading, setLoading] = useState(true)

    // const addItem = (text) => {
    //     const newList = [{ id: uuid(), name: text }, ...list]
    //     setList(newList)
    //     updateCurrentList(newList)

    // }
    // const removeItem = (id) => {
    //     const newList = list.filter(item => item.id !== id)
    //     setList(newList)
    //     updateCurrentList(newList)
    // }

    // useEffect(() => {

    //     setTimeout(() => {
    //         AsyncStorage.getItem('@@GrocerList/currentList')
    //             .then(data => JSON.parse(data))
    //             .then(data => {
    //                 if (data) {
    //                     setList(data)
    //                 }

    //                 setLoading(false)
    //             })
    //     }, 2000)
    // }, [])


    if (loading) {
        return (<SafeAreaView>
            <Text>Loading...</Text>
        </SafeAreaView>)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }}>

                <FlatList data={list} renderItem={({ item, index }) => (
                    <ListItem name={item.name}
                        onFavouritePress={() => console.log('favvvvv')}
                        isFavourite={index < 2}
                        onAddedSwipe={() => removeItem(item.id)}
                        onDeleteSwipe={() => removeItem(item.id)}
                    />

                )}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <Separator></Separator>}
                    ListHeaderComponent={() => <AddItem onSubmitEditing={({ nativeEvent: { text } }) => addItem(text)} />}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>)

};
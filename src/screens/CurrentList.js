import React from 'react'

import { View, Text, SafeAreaView, ScrollView, FlatList, KeyboardAvoidingView } from 'react-native'

import nachos from '../data/nachos'
import ListItem, { Separator } from '../components/ListItem'
import AddItem from '../components/AddItem'

export default () => {
    return (
        <SafeAreaView style={{flex: 1 }}>
            <KeyboardAvoidingView style={{flex: 1 }}>
                <AddItem />
                <FlatList data={nachos} renderItem={({ item, index }) => (
                    <ListItem name={item.name}
                        onFavouritePress={() => console.log('favvvvv')}
                        isFavourite={index < 2} />
                )}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <Separator></Separator>}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>)

};
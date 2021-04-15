import React from 'react'

import { View, Text, SafeAreaView, ScrollView } from 'react-native'

import nachos from '../data/nachos'
import ListItem, { Separator } from '../components/ListItem'

export default () => {
    return (
        <SafeAreaView>
            <ScrollView>
                {nachos.map((item, index) =>
                (
                    <React.Fragment key={item.id}>
                        <Separator></Separator>
                        <ListItem name={item.name}
                            onFavouritePress={() => console.log('favvvvv')}
                            isFavourite={index < 2} />
                    </React.Fragment>
                ))}
            </ScrollView>
        </SafeAreaView>

    )

};
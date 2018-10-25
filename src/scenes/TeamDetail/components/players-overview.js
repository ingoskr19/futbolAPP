import React, { Component } from 'react';
import {ScrollView, SectionList } from 'react-native';
import ItemPlayer from '../../Players/components/item-player';
import ItemSeparator from '../../Players/components/item-separator';

const renderItem = ({ item, props }) => <ItemPlayer player={item} />
const itemSeparator = ({ item, props }) => <ItemSeparator player={item} />
const keyExtractor = (item) => item.idPlayer.toString()

export default PlayersOverview = (props) => {
    console.log('ropiepaddes props:::::');
    console.log(props.playersList[0]);
    console.log('navgation::');
    console.log(props.navigation);
    return (<ScrollView>
        <SectionList
            renderItem={({item}) => renderItem(item,props)}
            ItemSeparatorComponent={({item}) => itemSeparator(item,props)}
            sections={[
                {
                    data: props.playersList
                }
            ]}
            keyExtractor={keyExtractor}
        />
    </ScrollView>
    );
};
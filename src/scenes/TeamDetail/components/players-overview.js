import React, { Component } from 'react';
import {ScrollView, SectionList } from 'react-native';
import ItemPlayer from '../../Players/components/item-player';
import ItemSeparator from '../../Players/components/item-separator';

const renderItem = ({ item }) => { 
    return (<ItemPlayer player={item} />);
}
const itemSeparator = (item) => <ItemSeparator player={item} />
const keyExtractor = (item) => item.idPlayer.toString()

export default PlayersOverview = (props) => {
    return (<ScrollView>
        <SectionList
            renderItem={(item) => renderItem(item)}
            ItemSeparatorComponent={(item) => itemSeparator(item)}
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
import React, { Component } from 'react';
import {ScrollView, SectionList } from 'react-native';
import ItemPlayer from '../../Players/components/item-player';
import ItemSeparator from '../../Players/components/item-separator';

renderItem = ({ item, props }) => <ItemPlayer navigation={props.navigation} player={item} />
itemSeparator = ({ item, props }) => <ItemSeparator navigation={props.navigation} player={item} />
keyExtractor = (item) => item.idPlayer.toString()

const Players = (props) => (
    <ScrollView>
        <SectionList
            renderItem={renderItem}
            ItemSeparatorComponent={itemSeparator}
            sections={[
                {
                    data: props.playersList
                }
            ]}
            keyExtractor={keyExtractor}
        />
    </ScrollView>
);

export default Players;
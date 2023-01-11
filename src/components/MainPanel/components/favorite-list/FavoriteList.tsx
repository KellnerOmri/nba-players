import './FavoriteList.css'
import {ListHeader} from "../list-header/ListHeader";
import {PlayerRow} from "../players-list/components/player-row/PlayerRow";
import {useAppSelector} from "../../../../app/hooks";
import React from "react";
export const FavoriteList=()=>{
    const {playersDict,backgroundColor} = useAppSelector(state => state.data);

    return <div className={"favorite-list-container"} style={{backgroundColor}}>
        <ListHeader label={"Favorite List"}/>
        <div className={"favorite-list-wrapper"}>
        {Object.keys(playersDict).filter((p)=>playersDict[p].isFavorite).map((player, index) => {
            return <PlayerRow key={index} player={playersDict[player]}/>
        })}
        </div>

    </div>
}

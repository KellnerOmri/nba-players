import './PlayerRow.css'
import React from "react";
import {PlayerModel} from "../../../../../../models/player.model";
import {Checkbox} from "../../../../../checkbox/Checkbox";
import {useAppDispatch, useAppSelector} from "../../../../../../app/hooks";
import {setPlayersList} from "../../../../../../store/data.slice";
export const PlayerRow:React.FC<{player:PlayerModel}>=({player})=>{
    const dispatch = useAppDispatch();
    const { playersDict } = useAppSelector(
        state => state.data,
    );
    const updateFavoritePlayer=()=>{
        dispatch(setPlayersList({...playersDict,[player.id]:{...player,isFavorite:!player.isFavorite} }))
    }

    return <div className={"player-row-container"}>
        <span className={"player-id"}>{player.id}</span>
        <div className={"player-name-wrapper"}>
        {` ${player.first_name} ${player.last_name}`}
        <Checkbox
            label={""}
            isChecked={player.isFavorite}
            functionAction={updateFavoritePlayer}
        />
        </div>
    </div>
}

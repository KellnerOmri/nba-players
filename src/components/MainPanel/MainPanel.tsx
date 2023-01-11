import './MainPanel.css'
import {PlayersList} from "./components/players-list/PlayersList";
import {FavoriteList} from "./components/favorite-list/FavoriteList";
import {useAppDispatch} from "../../app/hooks";
import {PlayerModel} from "../../models/player.model";
import {setPlayersList} from "../../store/data.slice";
import React, {useEffect} from "react";

export const MainPanel = () => {

    const dispatch = useAppDispatch();
    const createPlayerDict = (data: any) => {
        const playerDict: { [key: string]: PlayerModel } = {}
        data.forEach((p: any) => {
            playerDict[p.id] = {id: p.id, first_name: p.first_name, last_name: p.last_name, isFavorite: false}
        })
        dispatch(setPlayersList(playerDict))
    }
    useEffect(() => {
        fetch('https://www.balldontlie.io/api/v1/players')
            .then((res) => res.json())
            .then((answer) => {
                createPlayerDict(answer.data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return <div className={"main-panel-container"}>
        <PlayersList/>
        <div className={"separate-line"}/>
        <FavoriteList/>
    </div>
}

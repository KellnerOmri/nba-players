import './PlayersList.css'
import {useAppSelector} from "../../../../app/hooks";
import {PlayerRow} from "./components/player-row/PlayerRow";
import {ListHeader} from "../list-header/ListHeader";

export const PlayersList = () => {
    const {playersDict, searchInput} = useAppSelector(state => state.data);
    return <div className={"player-list-container"}>
        <ListHeader label={"NBA Player List"}/>
        <div className={"player-list-wrapper"}>
        {Object.keys(playersDict).filter((player)=>searchInput!==""&& playersDict[player].first_name.includes(searchInput) || playersDict[player].last_name.includes(searchInput)).map((player, index) => {
            return <PlayerRow key={index} player={playersDict[player]}/>
        })}
        </div>

    </div>
}

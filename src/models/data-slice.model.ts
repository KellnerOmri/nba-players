import {PlayerModel} from "./player.model";

export interface DataSliceModel {
    playersDict: { [key: string]: PlayerModel };
    searchInput:string;
    backgroundColor:string;
}

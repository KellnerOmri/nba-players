import './SearchPlayer.css'
import {setSearchInput} from "../../store/data.slice";
import {useAppDispatch} from "../../app/hooks";

export const SearchPlayer = () => {
    const dispatch = useAppDispatch();
    const updateSearchValue=(e:any)=>{
        dispatch(setSearchInput(e.target.value))
    }
    return <div className={"search-player-container"}>
        <input onChange={e=>updateSearchValue(e)} placeholder={"search player"}/>
    </div>
}

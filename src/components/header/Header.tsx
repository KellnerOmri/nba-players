import './Header.css'
import React, {useState} from "react";
import {ColorObject, ColorPicker} from "react-pick-color";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setBackgroundColor} from "../../store/data.slice";

export const Header = () => {
    const {backgroundColor} = useAppSelector(state => state.data);
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);
    const updateBackgroundColor=(color: ColorObject)=>{
        dispatch(setBackgroundColor(color.hex))
        setOpen(false)
    }

    const openColorPicker=()=>{
        setOpen(!open)
    }
    return <div className={"header-container"}>
        <div className={"color-picker-wrapper"}></div>
        <div className={"AlphaBet-label"}>AlphaBet - NBA players</div>
        <div className={"color-picker-wrapper"}>
            <button onClick={openColorPicker} className={"color-picker-button"} style={{backgroundColor}}></button>
        </div>
        {open && <div className={"color-picker-container"}>
            <ColorPicker  hideInputs={true} hideAlpha={true} color={backgroundColor} onChange={(color) => updateBackgroundColor(color)} />
        </div>}
        </div>
}

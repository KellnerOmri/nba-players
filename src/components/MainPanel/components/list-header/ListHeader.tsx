import './ListHeader.css'
import React from "react";
export const ListHeader:React.FC<{label:string}>=({label})=>{
    return <div className={"list-header-container"}>
        <span className={"list-header-wrapper"}>{label}</span>
    </div>
}

import type { ReactElement } from "react";

export function SidebarItems({text,icons}:{
    text:String,
    icons:ReactElement
}){
    return <div className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-200 max-w-48 pl-4 transition-all duration-500">
        <div className="pr-2">
            {icons}
        </div>
        <div>
            {text}
        </div>
    </div>
}
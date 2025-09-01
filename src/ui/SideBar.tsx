import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItems } from "./SideBarItems";

export function SideBar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-4">
        <div className="flex text-2xl pt-4 items-center">
            <div className="pr-2 text-indigo-500">
                <Logo size="lg"/>
            </div>
            Brainly
        </div>
        <div className="pt-4">
            <SidebarItems text="Twitter" icons={<TwitterIcon/>}/>
            <SidebarItems text="Youtube" icons={<YoutubeIcon/>}/>
        </div>
    </div>
}
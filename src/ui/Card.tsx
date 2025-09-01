import { DeleteIcon } from "../icons/deleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { ShareIcon } from "../icons/Shareicon";

interface Cardprops{
    title:String,
    link:any,
    type:"youtube"|"twt"
}

export function Card({title, link, type}:Cardprops){

    return <div>
        <div className="p-8 bg-white rounded-md max-w-96 border border-gray-200">
            <div className="flex justify-between ">
                <div className="flex items-center text-md">
                    <div className="text-gray-500">
                        <DocumentIcon size="lg"/>
                    </div>
                    {title}
                </div>
                <div className="flex text-gray-500">
                    <ShareIcon size="lg"/>
                    <DeleteIcon size="lg" /> 
                </div>
            </div>
            <div>
                {type==="youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                {type === "twt" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}
            </div>
        </div>

    </div>
}
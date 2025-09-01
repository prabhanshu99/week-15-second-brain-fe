import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
    const [contents,Setcontents] = useState([]);

    function refresh(){
        axios.get(`${BACKEND_URL}/api/v1/content`,{
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        })
            .then((response)=>{
                Setcontents(response.data.content)
            })
    }
    useEffect(()=>{
        refresh()
        let interval=setInterval(()=>{

        },10*1000)

        return ()=>{
            clearInterval(interval);

        }
    })
    return {contents,refresh};
}
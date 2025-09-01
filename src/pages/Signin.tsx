import { useRef } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/CreateContentModal";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin(){

    const usernameRef=useRef<HTMLInputElement>();
    const passwordRef=useRef<HTMLInputElement>();
    const navigate=useNavigate();

    async function signin(){
        const username=usernameRef.current?.value;
        const password=passwordRef.current?.value;
        console.log("usernameRef:", usernameRef.current);

        const response= await axios.post(BACKEND_URL+"/api/v1/signin",{
            username,
            password
        })
        const jwt=response.data.token;
        localStorage.setItem("token",jwt);
        navigate("/dashboard");

    }

    return <div className="flex justify-center bg-gray-200 h-screen w-screen items-center">
        <div className="bg-white min-w-48 rounded-xl p-8">
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>
            <div className="flex justify-center items-center">
                <Button variant="primary" onClick={signin} size="lg" text="Signin" fullWidth={true}/>
            </div>
        </div>
    </div>
}
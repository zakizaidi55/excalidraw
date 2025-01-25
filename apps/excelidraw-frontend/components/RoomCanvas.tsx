"use client"
import { WS_URL } from "@/app/config";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "./Canvas";



export function RoomCanvas({roomId}:{
    roomId: string
}) {
    
    const[socket, setSocket] = useState<WebSocket | null>(null);
    
    useEffect(()=> {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjI5NWY3OC0zN2I4LTRjMWItOWZiMC0yYTFiM2E3MDMyZjIiLCJpYXQiOjE3Mzc3MzI5NzV9.uE6OIiNs8gG7qIT9csadYq61xuTZ1ePseam_CiZDIQo`);
        ws.onopen = () => {
            setSocket(ws);
            ws.send(JSON.stringify({
                type:"join_room",
                roomId
            }))
        }
    }, [])
    

    if(!socket) {
        return <div>
            Connecting to server
        </div>
    }
    
    return <Canvas roomId = {roomId} socket = {socket}/>
}

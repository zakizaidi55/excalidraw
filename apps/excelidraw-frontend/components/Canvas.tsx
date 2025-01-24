"use client"
import { WS_URL } from "@/app/config";
import { initDraw } from "@/app/draw";
import { useEffect, useRef, useState } from "react";


export default async function Canvas({roomId}:{
    roomId: string
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const[socket, setSocket] = useState<WebSocket | null>(null);
    
    useEffect(()=> {
        const ws = new WebSocket(WS_URL);
        ws.onopen = () => {
            setSocket(ws);
        }
    }, [])

    if(!socket) {
        return <div>
            Connecting to server
        </div>
    }
    
    useEffect(() => {
        if(canvasRef.current) {
            initDraw(canvasRef.current, roomId);
        }
    }, [canvasRef])

    return <div>
        <canvas ref={canvasRef} width={2000} height={1000}></canvas>
    </div>
}


import { initDraw } from "@/app/draw";
import { useEffect, useRef } from "react";


export function Canvas({roomId, socket} : {
    roomId:string,
    socket:WebSocket
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    

    useEffect(() => {
        if(canvasRef.current) {
            initDraw(canvasRef.current, roomId, socket);
        }
    }, [canvasRef])


    return  <div>   
        <canvas ref={canvasRef} height={1000} width={2080}></canvas>
    </div>
    
}
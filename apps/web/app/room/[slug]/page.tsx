

import axios from "axios";
import ChatRoom from "../../../component/ChatRoom"
import { BACKEND_URL } from "../../config";

async function getRoomId(slug:string) {
    console.log("slug in room ", slug);
    const response = await axios.get(`${BACKEND_URL}/room/${slug}`)
    return response.data.room.id;
}


export default async function ChatRoom1({
    params
}:{
    parmas:{
        slug:string
    }
}) {
    
    const slug = (await params).slug;
    const roomId = await getRoomId(slug);

    return <ChatRoom id={roomId}></ChatRoom>
}
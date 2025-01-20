import axios from "axios";

import { ChatRoomClient } from "./ChatRoomClient";
import { BACKEND_URL } from "../app/config";


async function getChats(roomId: string) {
    const response = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
    console.log("Response ", response)
    return response.data.messages;
}

//@ts-ignore
export default async function ChatRoom({id}: {
    id:string
}) {
    const messages = await getChats(id);
    return <ChatRoomClient id={id} messages={messages} />
}
import { User } from "./UserManager";

let GLOBAL_ROOM_ID = 123;

export interface Room {
    user1: User,
    user2: User,
}

export class RoomManager {

    // Keeps a track of Rooms as String of ROOMID, with pair of Users
    private rooms: Map<string, Room>;
    
    constructor() {
        this.rooms = new Map<string , Room>();
    }

    createRoom (user1: User, user2: User) {
        const roomId = this.generateRoomId();
        this.rooms.set(roomId.toString(), {
            user1,
            user2,
        });

        user1.socket.emit("send-offer", {
            roomId
        })
    }

    // deleteRoom (roomId) {
    //     const room = this.rooms.find(x => x.roomId == roomId);
    // }

    onOffer(roomId: string, sdp: string) {
        const user2 = this.rooms.get(roomId)?.user2;
        user2?.socket.emit("offer", {
            sdp,
            roomId
        })
    }

    onAnswer(roomId: string, sdp: string) {
        const user1 = this.rooms.get(roomId)?.user1;
        user1?.socket.emit("answer", {
            sdp,
            roomId
        })
    }

    generateRoomId() {
        return GLOBAL_ROOM_ID++;
    }
}
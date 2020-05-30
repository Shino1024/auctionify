export class Message {
    constructor(props) {
        this.content = props.content
        this.read = false
    }
}

export class Room {
    constructor(props) {
        this.user1 = props.user1
        this.user2 = props.user2
        this.messagesForUser1 = []
        this.messagesForUser2 = []
    }

    sendMsgToUser2(message) {
        this.messagesForUser2.append(message)
        this.user1.socket.emit('sendMessage', {message: message})
    }

    sendMsgToUser1(message) {
        this.messagesForUser1.append(message)
    }

    getUsers() {
        return {
            user1Name: this.user1.name,
            user2Name: this.user2.name
        }
    }
}

export default {Message, Room}

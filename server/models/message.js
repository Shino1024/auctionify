import mongoose from 'mongoose'

const MessageSchema = mongoose.Schema({
    user1: {
        type: String,
        required: true
    },
    user2: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    }
})

const MessageModel = mongoose.model('message', MessageSchema)

export default MessageModel

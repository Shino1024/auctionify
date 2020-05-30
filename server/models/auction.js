import mongoose from 'mongoose'

const AuctionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    authorID: {
        type: ObjectId,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    isAuction: {
        type: Boolean,
        required: true
    },
    highestBid: {
        type: Number,
        required: false
    },
    highestBidHolder: {
        type: String,
        required: false
    }
})

const AuctionModel = mongoose.model('auction', AuctionSchema)

export default AuctionModel

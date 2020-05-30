import mongoose from 'mongoose'
import PassportLocalMongoose from 'passport-local-mongoose'

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
UserSchema.plugin(PassportLocalMongoose)

const UserModel = mongoose.model('user', UserSchema)

UserSchema.pre('save', (next) => {
    const self = this
    UserModel.find(
        {
            username: self.username
        },
        (err, docs) => {
            if (docs.length > 0) {
                next(new Error('User ' + self.username + ' already exists'))
            }
        }
    )
})

export default UserModel

const mongoose = require('mongoose');
const { Schema } = mongoose;

const seriesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    cards: [
        {
            url: {
                type: String,
                required: true
            },
            characterName: {
                type: String,
                required: true
            }, // Character name
            series: {
                type: String,
                required: true
            }, // Series of the character
            gen: {
                type: Number,
                default: 1
            },
            addedAt: {
                type: Date,
                default: Date.now
            },
            
            generated: {
                type: Number,
                default: 0
            },
            wishlistCount: {
                type: Number,
                default: 0
            },
        }
    ],
    wishlistCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Explicitly specify the collection name 'series' within the 'cards' database
module.exports = mongoose.model('Series', seriesSchema, 'series');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // _id
    name: {
        type: String,
        required: [true, "O nome é obrigatório"],
        trim: true,
    },
    slug_name: {
        type: String,
        required: [true, "O slug é obrigatório"],
        trim: true,
        unique: true,
    },
    climate: {
        type: String,
        required: [true, "O clima é obrigatório"],
        trim: true,
    },
    terrain: {
        type: String,
        required: [true, "O terreno é obrigatório"],
        trim: true,
    },
    films: [{
        type: String
    }]

});

module.exports = mongoose.model('Planet', schema);
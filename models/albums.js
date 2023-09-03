import { Schema, model, models } from 'mongoose';


const albumSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
    },
});

const Albums = models.Albums || model('Albums', albumSchema);

export default Albums;
import mongoose from 'mongoose';

const PsyQuerySchema = new mongoose.Schema({
    index: Number,
    query: String,
    imgUrl: String,
});

const PsyQueryModel = mongoose.model('PsyQuery', PsyQuerySchema);

export default PsyQueryModel;

import mongoose from 'mongoose';

const PsyTypeSchema = new mongoose.Schema({
    type: String,
});

const PsyTypeModel = mongoose.model('PsyType', PsyTypeSchema);

export default PsyTypeModel;

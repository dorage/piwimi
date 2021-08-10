import mongoose from 'mongoose';

const PsyYesNoSchema = new mongoose.Schema({
    _id: Number,
    queries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PsyQuery' }],
    weights: [{ type: Number }],
});

const PsyYesNoModel = mongoose.model('PsyYesNo', PsyYesNoSchema);

export default PsyYesNoModel;

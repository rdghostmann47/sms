import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  regNo: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfEntry: {
    type: Date,
    required: true,
  },
  guardianName: {
    type: String,
    required: true,
  },
  relationship: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  classOfEntry: {
    type: String,
    required: true,
  },
  hostelName: {
    type: String,
  },
  houseName: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
  guardianPhoneNumber: [{
    type: String,
    match: [/^\d{10,15}$/, 'Please fill a valid phone number'],
  }],
  address: {
    type: String,
    required: true,
  },
  subjects: [String],
  schoolID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.models.Student || mongoose.model('Student', StudentSchema);

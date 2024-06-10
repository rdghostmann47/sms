// models/Staff.js
import mongoose from 'mongoose';

const StaffSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  dateOfEmployment: Date,
  profilePicture: String,
  role: String,
  classAssigned: String,
  subjectAssigned: String,
  formTeacherForClass: String,
});

export default mongoose.models.Staff || mongoose.model('Staff', StaffSchema);
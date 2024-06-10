import { NextResponse } from 'next/server';
import Student from '../../../models/Student';
import bcrypt from 'bcrypt';
import connectDB from '@/app/lib/database';

export async function POST(req) {
  await connectDB();

  const { 
    name, dob, regNo, password, dateOfEntry, guardianName, relationship, 
    profilePicture, classOfEntry, hostelName, houseName, gender, 
    guardianPhoneNumber, address, subjects, schoolID, schoolName 
  } = await req.json();

  if (!name || !dob || !regNo || !password || !dateOfEntry || !guardianName || 
      !relationship || !classOfEntry || !gender || !guardianPhoneNumber || 
      !address || !schoolID || !schoolName) {
    return NextResponse.json({ error: 'All required fields must be provided' }, { status: 400 });
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const student = new Student({
      name,
      dob,
      regNo,
      password: hashedPassword,
      dateOfEntry,
      guardianName,
      relationship,
      profilePicture,
      classOfEntry,
      hostelName,
      houseName,
      gender,
      guardianPhoneNumber,
      address,
      subjects,
      schoolID,
      schoolName,
    });

    await student.save();
    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.error('Error registering student:', error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function GET() {
  await connectDB();

  try {
    const students = await Student.find().populate('schoolID');
    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    console.error('Error fetching students:', error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

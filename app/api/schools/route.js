import connectDB from '@/app/lib/database';
import School from '@/models/School';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';



export const POST = async (req) => {
  try {
    const body = await req.json();
    const {
      name,
      state,
      localGovernment,
      city,
      address,
      gradeType,
      genderType,
      ownershipType,
      enrollmentType,
      mission,
      phoneNumber,
      email,
      password,
    } = body;

    // Validate required fields
    if (!name || !state || !localGovernment || !city || !address || !gradeType || !genderType || !ownershipType || !enrollmentType || !phoneNumber || !email || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    await connectDB();

    // Check if the school already exists
    const existingSchool = await School.findOne({ email });
    if (existingSchool) {
      return NextResponse.json({ error: 'School with this email already exists' }, { status: 400 });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new school document
    const newSchool = new School({
      name,
      state,
      localGovernment,
      city,
      address,
      gradeType,
      genderType,
      ownershipType,
      enrollmentType,
      mission,
      phoneNumber,
      email,
      password: hashedPassword,
    });

    await newSchool.save();

    return NextResponse.json({ success: true, school: newSchool }, { status: 201 });
  } catch (error) {
    console.error('Error registering school:', error);
    return NextResponse.json({ error: 'invalid input field' }, { status: 500 });

  }
};

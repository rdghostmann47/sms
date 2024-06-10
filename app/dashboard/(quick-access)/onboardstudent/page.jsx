"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const AddStudentForm = () => {
  const [form, setForm] = useState({
    name: '',
    dob: '',
    regNo: '',
    password: '',
    confirmPassword: '',
    dateOfEntry: '',
    guardianName: '',
    relationship: '',
    profilePicture: '',
    classOfEntry: '',
    hostelName: '',
    houseName: '',
    gender: '',
    guardianPhoneNumber1: '',
    guardianPhoneNumber2: '',
    address: '',
    subjects: '',
  });

  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setPasswordMismatch(true);
      return;
    }

    try {
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        // Handle successful registration
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="page-header mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Add Students</h3>
          <ul className="breadcrumb flex space-x-2">
            <li className="breadcrumb-item">
              <Link href="students">Student</Link>
            </li>
            <li className="breadcrumb-item active">Add Students</li>
          </ul>
        </div>
      </div>

      <div className="shadow-lg p-6 bg-white rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <h5 className="text-lg font-semibold mb-4">
                Student Information{' '}
                <span className="float-right">
                  <Link href="/">
                    {/* <i className="feather-more-vertical"></i> */}
                  </Link>
                </span>
              </h5>
            </div>
            <div>
              <p className="block font-medium">
                Name <span className="text-red-500">*</span>
              </p>
              <input
                className="mt-1 p-2 w-full"
                name="name"
                type="text"
                placeholder="Enter Name"
                autoComplete="true"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="block font-medium">
                Date of Birth <span className="text-red-500">*</span>
              </p>
              <input
                className="mt-1 p-2 w-full"
                name="dob"
                type="date"
                autoComplete="true"
                value={form.dob}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="block font-medium">
                Registration Number <span className="text-red-500">*</span>
              </p>
              <input
                className="mt-1 p-2 w-full"
                name="regNo"
                type="text"
                placeholder="Enter Registration Number"
                autoComplete="true"
                value={form.regNo}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="block font-medium">
                Password <span className="text-red-500">*</span>
              </p>
              <input
                className="mt-1 p-2 w-full"
                name="password"
                type="password"
                placeholder="Enter Password"
                autoComplete="true"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="block font-medium">
                Confirm Password <span className="text-red-500">*</span>
              </p>
              <input
                className="mt-1 p-2 w-full"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                autoComplete="true"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="block font-medium">
                Date of Entry <span className="text-red-500">*</span>
              </p>
              <input
                className="mt-1 p-2 w-full"
                name="dateOfEntry"
                type="date"
                autoComplete="true"
                value={form.dateOfEntry}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="block font-medium">
                Guardian Name <span className="text-red-500">*</span>
              </p>
              <input
                className="mt-1 p-2 w-full"
                name="guardianName"
                type="text"
                placeholder="Enter Guardian Name"
                autoComplete="true"
                value={form.guardianName}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="block font-medium">
                Relationship <span className="text-red-500">*</span>
              </p>
              <input
                className="mt-1 p-2 w-full"
                name="relationship"
                type="text"
                placeholder="Enter Relationship"
                autoComplete="true"
                value={form.relationship}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="block font-medium">Profile Picture</p>
              <input
                className="mt-1 p-2 w-full"
                name="profilePicture"
                type="text"
                placeholder="Enter Profile Picture URL"
                autoComplete="true"
                value={form.profilePicture}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="block font-medium">
                Class of Entry <span className="text-red-500">*</span>
              </p>
              <input
                className="mt-1 p-2 w-full"
                name="classOfEntry"
                type="text"
                placeholder="Enter Class of Entry"
                autoComplete="true"
                value={form.classOfEntry}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="block font-medium">Hostel Name</p>
              <input
                className="mt-1 p-2 w-full"
                name="hostelName"
                type="text"
                placeholder="Enter Hostel Name"
                autoComplete="true"
                value={form.hostelName}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="block font-medium">House Name</p>
              <input
                className="mt-1 p-2 w-full"
                name="houseName"
                type="text"
                placeholder="Enter House Name"
                autoComplete="true"
                value={form.houseName}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="block font-medium">
                Gender <span className="text-red-500">*</span>
              </p>
              <select
                className="form-control mt-1 block w-full"
                name="gender"
                value={form.gender}
                onChange={handleChange}
              >
                <option>Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className="block font-medium">
                Guardian Phone Number 1 <span className="text-red-500">*</span>
              </p>
              <input
                className="mt-1 p-2 w-full"
                name="guardianPhoneNumber1"
                type="text"
                placeholder="Enter Guardian Phone Number 1"
                autoComplete="true"
                value={form.guardianPhoneNumber1}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="block font-medium">Guardian Phone Number 2</p>
              <input
                className="mt-1 p-2 w-full"
                name="guardianPhoneNumber2"
                type="text"
                placeholder="Enter Guardian Phone Number 2"
                autoComplete="true"
                value={form.guardianPhoneNumber2}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="block font-medium">
                Address <span className="text-red-500">*</span>
              </p>
              <input
                className="mt-1 p-2 w-full"
                name="address"
                type="text"
                placeholder="Enter Address"
                autoComplete="true"
                value={form.address}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="block font-medium">
                Subjects <span className="text-red-500">*</span>
              </p>
              <input
                className="mt-1 p-2 w-full"
                name="subjects"
                type="text"
                placeholder="Enter Subjects"
                autoComplete="true"
                value={form.subjects}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 mt-4">
              <button
                type="submit"
                className="btn btn-primary w-full py-2 bg-blue-500 text-white rounded"
              >
                Submit
              </button>
            </div>
          </div>

          {passwordMismatch && (
            <div className="text-red-500 text-sm">Passwords do not match.</div>
          )}
          {error && <div className="text-red-500 text-sm">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;

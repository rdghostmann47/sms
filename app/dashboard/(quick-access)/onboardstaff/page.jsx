"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const AddStaff = () => {
  const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    dateOfEmployment: '',
    profilePicture: '',
    role: '',
    classAssigned: '',
    subjectAssigned: '',
    isFormTeacher: false,
    staffID: '',
    gender: '',
    dob: '',
    qualification: '',
    experience: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.repeatPassword) {
      setPasswordMismatch(true);
      return;
    }

    try {
      const response = await fetch('/api/staff', {
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
    <div className="mx-auto p-4">
      <div className="page-header mb-6">
        <div className="flex flex-col px-6 justify-between">
          <h3 className="text-xl font-bold">Add Staff</h3>
          <ul className="breadcrumb flex">
            <li className="breadcrumb-item"><Link href="#">Staff</Link></li>/
            <li className="breadcrumb-item text-indigo-400">Onboard Staff</li>
          </ul>
        </div>
      </div>

      <div className="shadow-lg p-6 bg-white rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <h5 className="text-lg font-semibold mb-4">Basic Details</h5>
            </div>
            <div>
              <label htmlFor="staffID" className="block font-medium">Staff ID <span className="text-red-500">*</span></label>
              <input id="staffID" name="staffID" type="text" className="p-2 w-full" placeholder="Staff ID" value={form.staffID} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="fullName" className="block font-medium">Full Name <span className="text-red-500">*</span></label>
              <input id="fullName" name="fullName" type="text" className="p-2 w-full" placeholder="Enter Full Name" value={form.fullName} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="gender" className="block font-medium">Gender <span className="text-red-500">*</span></label>
              <select id="gender" name="gender" className="p-2 w-full" value={form.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="dob" className="block font-medium">Date Of Birth <span className="text-red-500">*</span></label>
              <input id="dob" name="dob" type="date" className="p-2 w-full" value={form.dob} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block font-medium">Phone Number <span className="text-red-500">*</span></label>
              <input id="phoneNumber" name="phoneNumber" type="text" className="p-2 w-full" placeholder="Enter Phone Number" value={form.phoneNumber} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="dateOfEmployment" className="block font-medium">Date of Employment <span className="text-red-500">*</span></label>
              <input id="dateOfEmployment" name="dateOfEmployment" type="date" className="p-2 w-full" value={form.dateOfEmployment} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="profilePicture" className="block font-medium">Profile Picture</label>
              <input id="profilePicture" name="profilePicture" type="text" className="p-2 w-full" placeholder="Profile Picture URL" value={form.profilePicture} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="qualification" className="block font-medium">Qualification <span className="text-red-500">*</span></label>
              <input id="qualification" name="qualification" type="text" className="p-2 w-full" placeholder="Enter Qualification" value={form.qualification} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="experience" className="block font-medium">Experience <span className="text-red-500">*</span></label>
              <input id="experience" name="experience" type="text" className="p-2 w-full" placeholder="Enter Experience" value={form.experience} onChange={handleChange} />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <h5 className="text-lg font-semibold mb-4">Role Assignment</h5>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <label htmlFor="role" className="block font-medium">Role <span className="text-red-500">*</span></label>
              <div className="flex flex-wrap">
                {['Principal', 'Vice Principal', 'Dean', 'Bursar', 'Teacher', 'Form Teacher', 'Matron/Hostel Mistress', 'Patron/Hostel Master', 'Cook', 'Security', 'Gate-Keeper', 'Canteen', 'Driver', 'Cleaner'].map((role) => (
                  <div key={role} className="mr-4">
                    <input
                      type="radio"
                      id={role}
                      name="role"
                      value={role}
                      checked={form.role === role}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor={role} className="font-medium">{role}</label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="classAssigned" className="block font-medium">Assign Class</label>
              <input id="classAssigned" name="classAssigned" type="text" className="p-2 w-full" placeholder="Enter Class" value={form.classAssigned} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="subjectAssigned" className="block font-medium">Assign Subject</label>
              <input id="subjectAssigned" name="subjectAssigned" type="text" className="p-2 w-full" placeholder="Enter Subject" value={form.subjectAssigned} onChange={handleChange} />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <div className="flex items-center">
                <input
                  id="isFormTeacher"
                  name="isFormTeacher"
                  type="checkbox"
                  className="mr-2"
                  checked={form.isFormTeacher}
                  onChange={handleChange}
                />
                <label htmlFor="isFormTeacher" className="font-medium">Make the teacher a form teacher for a particular class (for attendance marking)</label>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <h5 className="text-lg font-semibold mb-4">Login Details</h5>
            </div>
            <div>
              <label htmlFor="username" className="block font-medium">Username <span className="text-red-500">*</span></label>
              <input id="username" name="username" type="text" className="p-2 w-full" placeholder="Enter Username" value={form.username} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">Email ID <span className="text-red-500">*</span></label>
              <input id="email" name="email" type="email" className="p-2 w-full" placeholder="Enter Email ID" value={form.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">Password <span className="text-red-500">*</span></label>
              <input id="password" name="password" type="password" className="p-2 w-full" placeholder="Enter Password" value={form.password} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="repeatPassword" className="block font-medium">Repeat Password <span className="text-red-500">*</span></label>
              <input id="repeatPassword" name="repeatPassword" type="password" className="p-2 w-full" placeholder="Repeat Password" value={form.repeatPassword} onChange={handleChange} />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <h5 className="text-lg font-semibold mb-4">Address</h5>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <label htmlFor="address" className="block font-medium">Address <span className="text-red-500">*</span></label>
              <input id="address" name="address" type="text" className="p-2 w-full" placeholder="Enter Address" value={form.address} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="city" className="block font-medium">City <span className="text-red-500">*</span></label>
              <input id="city" name="city" type="text" className="p-2 w-full" placeholder="Enter City" value={form.city} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="state" className="block font-medium">State <span className="text-red-500">*</span></label>
              <input id="state" name="state" type="text" className="p-2 w-full" placeholder="Enter State" value={form.state} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="zipCode" className="block font-medium">Zip Code <span className="text-red-500">*</span></label>
              <input id="zipCode" name="zipCode" type="text" className="p-2 w-full" placeholder="Enter Zip Code" value={form.zipCode} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="country" className="block font-medium">Country <span className="text-red-500">*</span></label>
              <input id="country" name="country" type="text" className="p-2 w-full" placeholder="Enter Country" value={form.country} onChange={handleChange} />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 mt-4">
              <button type="submit" className="btn btn-primary w-full py-2 bg-blue-500 text-white rounded">Submit</button>
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

export default AddStaff;

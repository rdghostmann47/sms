import React from 'react'
import Link from 'next/link'

const AttendanceTable = () => {
  return (
    <div className="content container mx-auto p-4">

      <div className="page-header mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Attendance</h3>
            <ul className="flex space-x-2 text-sm text-gray-500">
              <li><Link href="/"><a>Dashboard</a></Link></li>
              <li>/</li>
              <li>Attendance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="w-full">
          <div className="bg-white shadow rounded-lg">
            <div className="p-4">

              <div className="page-header mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Attendance</h3>
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="btn btn-outline-primary border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white"><i className="fas fa-download"></i> Download</a>
                    <Link href="add-attendance">
                      <a className="btn btn-primary bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"><i className="fas fa-plus"></i></a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table-auto w-full border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 text-left">Teacher Name</th>
                      <th className="p-2 text-left">Class</th>
                      <th className="p-2 text-left">Subject</th>
                      <th className="p-2 text-left">Time In</th>
                      <th className="p-2 text-left">Mins Late</th>
                      <th className="p-2 text-left">Time Out</th>
                      <th className="p-2 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-2">
                        <h2><a>Class Test</a></h2>
                      </td>
                      <td className="p-2">10</td>
                      <td className="p-2">English</td>
                      <td className="p-2">10:00 AM</td>
                      <td className="p-2">01:00 PM</td>
                      <td className="p-2">23 Apr 2020</td>
                      <td className="p-2 text-right">
                        <div className="flex justify-end space-x-2">
                          <a href="#" className="btn btn-sm bg-green-100 text-green-600 py-1 px-2 rounded hover:bg-green-200"><i className="feather-eye"></i></a>
                          <Link href="edit-attendance">
                            <a className="btn btn-sm bg-red-100 text-red-600 py-1 px-2 rounded hover:bg-red-200"><i className="feather-edit"></i></a>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">
                        <h2><a>Half Yearly</a></h2>
                      </td>
                      <td className="p-2">1</td>
                      <td className="p-2">Botany</td>
                      <td className="p-2">10:00 AM</td>
                      <td className="p-2">01:00 PM</td>
                      <td className="p-2">23 Apr 2020</td>
                      <td className="p-2 text-right">
                        <div className="flex justify-end space-x-2">
                          <a href="#" className="btn btn-sm bg-green-100 text-green-600 py-1 px-2 rounded hover:bg-green-200"><i className="feather-eye"></i></a>
                          <Link href="edit-attendance">
                            <a className="btn btn-sm bg-red-100 text-red-600 py-1 px-2 rounded hover:bg-red-200"><i className="feather-edit"></i></a>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">
                        <h2><a>Quarterly</a></h2>
                      </td>
                      <td className="p-2">9</td>
                      <td className="p-2">Biology</td>
                      <td className="p-2">01:00 PM</td>
                      <td className="p-2">04:00 PM</td>
                      <td className="p-2">26 Nov 2020</td>
                      <td className="p-2 text-right">
                        <div className="flex justify-end space-x-2">
                          <a href="#" className="btn btn-sm bg-green-100 text-green-600 py-1 px-2 rounded hover:bg-green-200"><i className="feather-eye"></i></a>
                          <Link href="edit-attendance">
                            <a className="btn btn-sm bg-red-100 text-red-600 py-1 px-2 rounded hover:bg-red-200"><i className="feather-edit"></i></a>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttendanceTable

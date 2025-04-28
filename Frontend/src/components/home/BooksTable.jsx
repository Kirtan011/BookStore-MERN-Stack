import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto p-4 ">
      <table className="w-full border-separate border-spacing-3 ">
        <thead className='text-center px-5 py-3 bg-white rounded-lg transition duration-500 ease-in-out hover:scale-[1.01] shadow-[3px_3px_5px_rgba(0,0,0,0.6)] hover:shadow-[7px_9px_7px_rgba(0,0,0,0.6)]'>
          <tr>
            <th className="bg-white text-lg px-6 py-3 rounded-lg shadow-md ">No</th>
            <th className="bg-white text-lg px-6 py-3 rounded-lg shadow-md">Title</th>
            <th className="bg-white text-lg px-6 py-3 rounded-lg shadow-md max-md:hidden">Author</th>
            <th className="bg-white text-lg px-6 py-3 rounded-lg shadow-md max-md:hidden">Year</th>
            <th className="bg-white text-lg px-6 py-3 rounded-lg shadow-md">Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className='text-center px-5 py-3 bg-white rounded-lg transition duration-500 ease-in-out hover:scale-[1.01] shadow-[3px_3px_5px_rgba(0,0,0,0.6)] hover:shadow-[7px_9px_7px_rgba(0,0,0,0.6)]'>
              <td className="text-center px-5 py-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition">{index + 1}</td>
              <td className="text-center px-5 py-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition">{book.title}</td>
              <td className="text-center px-5 py-3 bg-white rounded-lg shadow-lg max-md:hidden hover:shadow-xl transition">{book.author}</td>
              <td className="text-center px-5 py-3 bg-white rounded-lg shadow-lg max-md:hidden hover:shadow-xl transition">{book.publishYear}</td>
              <td className="text-center px-5 py-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="flex justify-center gap-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-700 hover:text-green-500 transition" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-blue-700 hover:text-blue-500 transition" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-700 hover:text-red-500 transition" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BooksTable;

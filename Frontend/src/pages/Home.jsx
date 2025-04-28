import React, { useState, useEffect } from 'react';
import axios from "axios";
import Spinner from '../components/Spinner';
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { IoAdd } from "react-icons/io5";
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = () => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>

      {/* Content */}
      <div className="relative p-4">

        <div className="flex justify-center items-center gap-x-4">
          {/* Table button */}
          <div
            className="w-[6em] h-12 bg-red-500 rounded-lg cursor-pointer select-none
            active:translate-y-2 active:[box-shadow:0_0px_0_0_#F26C6C,0_0px_0_0_#1b70f841]
            active:border-b-[0px]
            transition-all duration-150 [box-shadow:0_10px_0_0_#F26C6C,0_15px_0_0_#1b70f841]
            border-b-[1px] border-red-200"
            onClick={() => setShowType("table")}
          >
            <span className="flex flex-col justify-center items-center h-full text-white font-semibold text-3xl  font-reenie">
              Table
            </span>
          </div>

          {/* Card button */}
          <div
            className="w-[6em] h-12 bg-red-500 rounded-lg cursor-pointer select-none
            active:translate-y-2 active:[box-shadow:0_0px_0_0_#F26C6C,0_0px_0_0_#1b70f841]
            active:border-b-[0px]
            transition-all duration-150 [box-shadow:0_10px_0_0_#F26C6C,0_15px_0_0_#1b70f841]
            border-b-[1px] border-red-200"
            onClick={() => setShowType("card")}
          >
            <span className="flex flex-col justify-center items-center h-full text-white font-semibold text-3xl  font-reenie">
              Card
            </span>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <h1 className='text-8xl my-8 font-reenie '> Book List </h1>
        </div>

        <div className="flex justify-end w-[8em] text-white my-6 h-12 bg-red-500 rounded-2xl cursor-pointer select-none
        active:translate-y-2 active:[box-shadow:0_0px_0_0_#F26C6C,0_0px_0_0_#1b70f841]
        active:border-b-[0px]
        transition-all duration-150 [box-shadow:0_10px_0_0_#F26C6C,0_15px_0_0_#1b70f841]
        border-b-[1px] border-red-200">
            <Link to={`/books/create`}>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-3xl pr-4 pt-2  font-reenie">Add Book</span>
          </div>
          </Link>
        </div>

        {loading ? <Spinner /> : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)}

      </div>
    </div>
  )
}

export default Home;

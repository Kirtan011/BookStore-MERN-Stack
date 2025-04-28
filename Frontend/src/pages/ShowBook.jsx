import React , {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'; 
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook]= useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(()=> {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res)=>{
        setBook(res.data);
        setLoading(false);
      })
      .catch((err)=>{
        console.log(err);
        setLoading(false);
      })
  },[]);

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='flex justify-center items-center text-7xl my-4 font-reenie '>Book Details</h1>
      { loading ? (
        <Spinner/>
      ): (
        <div className='flex flex-col  border-black  rounded-xl w-[600px] p-4 mx-auto transition duration-500 bg-sky-50 ease-in-out hover:scale-[1.02] hover:shadow-[0px_0px_50px_rgba(0,0,0,0.6)] shadow-[0px_0px_0px_rgba(0,0,0,0.6)]'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'> Id : </span>
            <span className='text-xl'>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'> Title : </span>
            <span className='text-xl'>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'> Author : </span>
            <span className='text-xl'>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'> Publish Year :  </span>
            <span className='text-xl'>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'> Create Time : </span>
            <span className='text-xl'>{book.createdAt? new Date(book.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short',year: 'numeric'}): 'N/A'}</span>

          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'> Update Time : </span>
            <span className='text-xl'>{book.updatedAt? new Date(book.updatedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short',year: 'numeric'}): 'N/A'}</span>

          </div>
        </div>
      )}
    </div> 
  )
}

export default ShowBook
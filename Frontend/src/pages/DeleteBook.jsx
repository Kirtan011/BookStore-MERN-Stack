import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  
  return (
    <div className='p-4 '>
      <BackButton />
      <h1 className='flex justify-center items-center text-7xl my-4 font-reenie'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col  border-black  rounded-xl w-[600px] p-4 mx-auto transition duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0px_0px_50px_rgba(0,0,0,0.6)] shadow-[0px_0px_0px_rgba(0,0,0,0.6)]'>
        <h3 className='flex justify-center items-center text-black text-3xl mr-4 font-reenie'>Are you sure you want to delete this book?</h3>

        <button
          className='p-4 my-6 w-[15em] h-12 text-3xl font-reenie bg-red-500 rounded-lg cursor-pointer select-none text-white
          active:translate-y-2 active:[box-shadow:0_0px_0_0_#F26C6C,0_0px_0_0_#1b70f841]
          active:border-b-[0px]
          transition-all duration-150 [box-shadow:0_10px_0_0_#F26C6C,0_15px_0_0_#1b70f841]
          border-b-[1px] border-red-200 mx-auto'
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook;
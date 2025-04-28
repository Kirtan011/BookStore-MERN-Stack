import React , {useState} from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useSnackbar } from 'notistack';


const CreateBook = () => {
  const [title ,setTitle]= useState();
  const [author, setAuthor]=useState();
  const [publishYear,setPublishYear]=useState();
  const [loading ,setLoading]=useState(false);
  
  const navigate=useNavigate();
  const {enqueueSnackbar}=useSnackbar();

  const handleSaveBook=()=>{
    const data={
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:3000/books',data)
      .then(()=>{
        setLoading(false);
        enqueueSnackbar("Book Created Successfully ", {variant:'success'});
        navigate('/')
      })
      .catch((err)=>{
        setLoading(false);
        //alert("Something's Wrong")
        enqueueSnackbar("Error", {variant:'Error'});
        console.log(err) 
      });
  }
  
  return (
    <div className='py-4 mx-3'>
  <BackButton />
  <div className='flex justify-center items-center '>
    <h1 className='text-7xl my-8 font-reenie'>Create Book</h1>
  </div>
  {loading ? (
    <Spinner />
  ) : (
    <div className='flex flex-col  border-black  rounded-xl w-[600px] p-4 mx-auto transition duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0px_0px_50px_rgba(0,0,0,0.6)] shadow-[0px_0px_0px_rgba(0,0,0,0.6)]'>
      
      <div className='my-4'>
        <label className='text-3xl mr-4 text-gray-900 font-reenie'>Title</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='text-xl border-2 border-gray-500 px-4 py-2 w-full'
        />
      </div>
      <div className='my-4'>
        <label className='text-3xl mr-4 text-gray-900 font-reenie'>Author</label>
        <input
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='text-xl border-2 border-gray-500 px-4 py-2 w-full'
        />
      </div>
      <div className='my-4'>
        <label className='text-3xl mr-4 text-gray-900 font-reenie'>Publish Year</label>
        <input
          type='text'
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          className='text-xl border-2 border-gray-500 px-4 py-2 w-full'
        />
      </div>
      <button
      className="my-6 w-[15em] h-12 text-3xl font-reenie bg-red-500 rounded-lg cursor-pointer select-none text-white
      active:translate-y-2 active:[box-shadow:0_0px_0_0_#F26C6C,0_0px_0_0_#1b70f841]
      active:border-b-[0px]
      transition-all duration-150 [box-shadow:0_10px_0_0_#F26C6C,0_15px_0_0_#1b70f841]
      border-b-[1px] border-red-200 mx-auto"
      onClick={handleSaveBook}
      >
       Save
      </button>

    </div>
  )}
</div>

  )
}

export default CreateBook
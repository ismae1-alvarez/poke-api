import { Fragment } from 'react/jsx-runtime'
import {  useAppDispatch }  from '../store/index'
import {createTrianer} from "../store/slices/trianer"
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
  const dispatch = useAppDispatch()
  const myTrainer = useRef<HTMLInputElement>(null);
  const navigate =  useNavigate()

  
  const handleTrainer = (e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    if (myTrainer.current?.value) {
      dispatch(createTrianer(myTrainer.current.value));
      navigate('/home');
    } else {
      console.log('Trainer name is empty');
    }
  }

  
  return (
   <Fragment>
      <form className="bg-gray-200 gap-5 flex flex-col justify-center pt-10 h-screen px-5 py-8 items-center">
        <div className=' flex flex-col justify-center w-fit gap-5'>
          <label htmlFor="name" className='text-xl'>Trainer</label>
          <input ref={myTrainer} type="text" placeholder='Ismael' className='py-2 px-3 rounded-md' id='name'/>
          <button onClick={(e)=> handleTrainer(e)} type='submit' className='bg-orange-400 text-white  px-3 py-2 rounded text-xl'>Create Trainer</button>
        </div>
      </form>
   </Fragment>
  )
}
export default Login
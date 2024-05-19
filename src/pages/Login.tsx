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
      <form className='bg-gray-400 flex flex-col p-3' >
        <input ref={myTrainer} type="text" placeholder='Benja' />

        <button onClick={(e)=> handleTrainer(e)} type='submit' className='bg-green-400 px-3 py-2 rounded'>Create Trainer</button>
      </form>
   </Fragment>
  )
}
export default Login

import React from 'react'
import {useForm} from "react-hook-form"
import defaultValues from '../utils/defaultValues'
import { useEffect } from 'react'

const FormUser = ({ createNewUser, updateinfo, updateUsrId, setUpdateinfo, setformclose, formclose }) => {

    const {register, handleSubmit, reset} = useForm()

   useEffect(() => {
    reset(updateinfo)
   }, [updateinfo])

    const submit = data => {
      if(updateinfo){
        //UPDATE
        updateUsrId(updateinfo.id, data)
        setUpdateinfo()
      } else {
        //CREATE
        createNewUser(data)
      }
        reset(defaultValues)
    }

    const handleExit = () => {
      setformclose(true)
    }

    const handleExit2 = () => {
      setformclose(true)
    }


  return (
    <div className={`form_container ${formclose && 'close'}`}>
      <form className='form' onSubmit={handleSubmit(submit)}>
        <h3 className='form_title'>{updateinfo ? 'UPDATE USER INFO.' : 'CREATE NEW USER' }</h3>
        <span onClick={handleExit} className="form_exit">x</span>
      <div className='form_item'>
        <label className='form_label' htmlFor="email">Email</label>
        <input className='form_input' {...register("email")} type="email" id="email" />
      </div>
      <div className='form_item'>
        <label className='form_label' htmlFor="password">Password</label>
        <input className='form_input' {...register("password")} type="password" id="password" />
      </div>
      <div className='form_item'>
        <label className='form_label' htmlFor="first_name">First Name</label>
        <input className='form_input' {...register("first_name")} type="text" id="first_name" />
      </div>
      <div className='form_item'>
        <label className='form_label' htmlFor="last_name">Last Name</label>
        <input className='form_input' {...register("last_name")} type="text" id="last_name" />
      </div>
      <div className='form_item'>
        <label className='form_label' htmlFor="birthday">Birthdat</label>
        <input className='form_input' {...register("birthday")} type="date" id="birthday" />
      </div>
      <button onClick={handleExit2} className='form_btn'>{updateinfo ? 'update' : 'create' }</button>
    </form>
    </div>
  )
}

export default FormUser
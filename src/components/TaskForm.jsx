import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, editTask } from "../features/taskSlice"
import { nanoid } from "@reduxjs/toolkit"
import { useNavigate, useParams } from "react-router-dom"


const TaskForm = () => {
  
  const [newTask, setNewTask] = useState({
    id: nanoid(),
    title: '',
    description: '',
  })

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const params = useParams()

  const tasks = useSelector(state => state.tasks)

  const handleChange = e => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(params.id){
      dispatch(editTask(newTask))
    } else{
      dispatch(addTask(newTask))
    }
    navigate('/')
  }

  useEffect(() => {
    if(params.id){
      setNewTask(tasks.find(task => task.id === params.id))
    }
  }, [params.id, tasks])

  return (
    <form onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4'>
      <label htmlFor='title' className='block text-s font-bold mb-2'>Task: </label>
      <input
        name="title"
        type='text'
        placeholder='Title'
        onChange={handleChange}
        value={tasks.title}
        className='w-full p-2 rounded-md bg-zinc-600 mb-2'
      />
      <label htmlFor="description" className='block text-s font-bold mb-2'>Description</label>
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={tasks.description}
        className='w-full p-2 rounded-md bg-zinc-600 mb-2'
      ></textarea>

      <button className='bg-indigo-600 px-2 py-1'>Save</button>
    </form>
  )
}

export default TaskForm
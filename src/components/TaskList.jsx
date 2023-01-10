import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask} from '../features/taskSlice'
const TaskList = () => {

  const tasks = useSelector(state => state.tasks)

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div className='w-4/6'>
      <header className='flex justify-between items-center py-4 text-xl font-semibold'>
        <h1>Tasks {tasks.length}</h1>
        <Link to='/createTask' className='bg-indigo-600 px-2 py-1 rounded-xl text-sm'>Create a task</Link>
      </header>

      <div className='grid grid-cols-3 gap-4'>
        {tasks.map(task => (
          <div key={task.id} className='bg-neutral-800 rounded-md p-4'>
            <header className='flex justify-between'>
              <h3>{task.title}</h3>
              <div className='flex gap-x-2'>
                <Link to={`editTask/${task.id}`} className='bg-zinc-600 px-2 py-1 text-xs rounded-md'>Edit</Link>
                <button onClick={() => handleDelete(task.id)} className='bg-red-500 px-2 py-1 text-xs rounded-md  '>Delete</button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList
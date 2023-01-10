import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className="bg-zinc-900 h-screen text-white">

      <div className='flex items-center justify-center h-full'>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TaskList />} />
            <Route path='/createTask' element={<TaskForm />} />
            <Route path='/editTask/:id' element={<TaskForm />} />
          </Routes>
        </BrowserRouter>


      </div>

    </div>
  )
}

export default App

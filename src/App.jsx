import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchTodo } from './redux/slice/todo'

function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  if (state.todo.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <button type="button" onClick={() => dispatch(fetchTodo())}>Fetch Todos</button>
      <ol>
        {
          state.todo.data?.map((e) => (<div className='list'> <li>{e.title}</li></div>))
        }
      </ol>
    </>
  )
}

export default App

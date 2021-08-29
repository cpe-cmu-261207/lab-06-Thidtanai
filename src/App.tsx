import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { async } from 'q';

//type Params = {
//  id: string
//}
//
//type TaskType = {
//  id: number
//  userId: number
//  title: string
//  completed: boolean
//}
//
//const task = ()=>{
//  const { id } = useParams<Params>()
//  const [task, setTask] = useState<TaskType | null>(null)
//  const [loading, setLoading] = useState(true)
//  const [error, setError] = useState(false)
//
//  const fetchApi = async () => {
//    try{
//      const resp = await axios.get<TaskType>(`https://api.coindesk.com/v1/bpi/currentprice/thb.json/${id}`)
//      setTask(resp.data)
//      setLoading(false)
//    }
//    catch (err){
//      setLoading(false)
//      setError(true)
//    }
//  }
//}
type Params = {
  rate_float: string
}

type TaskType = {
  time: string
  disclaimer: string
  bpi: string
  description: string
  rate_float: number
}
const Task = () => {
  const { rate_float } = useParams<Params>()
  const [task, setTask] = useState<TaskType | null>(null)
  const fetchApi = async () => {
    try {
      const resp = await axios.get<TaskType>(`https://api.coindesk.com/v1/bpi/currentprice/thb.json`)
      console.log(resp.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    axios.get<TaskType>(`https://api.coindesk.com/v1/bpi/currentprice/thb.json`)
      .then(resp => {
        console.log(resp.data)
        setTask(resp.data)
      })
      .catch(err => console.log(err))

    fetchApi()
  }, [])

  return (
    <div>
      Viewing task id = bla bla bla
      <div style={{ backgroundColor: 'yellow' }}>
        <p>rate_float: {task?.rate_float}</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path='/current'>
          {/* template for /current */}
          <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Current price</p>
            <p className='text-2xl'>Loading ...</p>
            <p className='text-2xl'>{(999999999).toLocaleString()} THB</p>
            <p> (Last updated) </p>
          </div>
        </Route>

        <Route path='/history/select'>
          {/* template for /history/select */}
          <div className='text-center space-y-3 space-x-3'>
            <p className='text-2xl font-semibold'>Select historical range</p>
            <span>From date</span>
            <input type='date' onChange={e => console.log(e.target.value)}></input>
            <span>To date</span>
            <input type='date' onChange={e => console.log(e.target.value)}></input>
            <br />
            <button><Link to='/history/result'>Get data</Link></button>
          </div>
        </Route>


        <Route path='/history/result'>
          {/* template for /history/result */}
          <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Historical price</p>
            <p className='text-2xl'>Loading ...</p>
            <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
            <p className='text-xl font-semibold'> ( From 2021-01-01 To 2021-01-02)</p>
            <ul>
              <li className='text-xl'>2021-01-01 - {(1000000).toLocaleString()} THB</li>
              <li className='text-xl'>2021-01-02 - {(2000000).toLocaleString()} THB</li>
              <li className='text-xl'>2021-01-03 - {(3000000).toLocaleString()} THB</li>
            </ul>
          </div>
        </Route>


        <Route path='/aboutme'>
          {/* template for about me */}
          <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>About me</p>
            <p className='text-xl'>Thidtanai Kaewphet 630610741</p>
          </div>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { async } from 'q';
//import component
import Current from './components/Current';
import Historical from './components/Historical';
import HistoricalResult from './components/HistoricalResult';

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
//type Params = {
//  rate_float: string
//}
//
//type TaskType = {
//  time: string
//  disclaimer: string
//  bpi: string
//  description: string
//  rate_float: number
//}
//const Task = () => {
//  const { rate_float } = useParams<Params>()
//  const [task, setTask] = useState<TaskType | null>(null)
//  const fetchApi = async () => {
//    try {
//      const resp = await axios.get<TaskType>(`https://api.coindesk.com/v1/bpi/currentprice/thb.json`)
//      console.log(resp.data)
//    }
//    catch (err) {
//      console.log(err)
//    }
//  }
//
//  useEffect(() => {
//    axios.get<TaskType>(`https://api.coindesk.com/v1/bpi/currentprice/thb.json`)
//      .then(resp => {
//        console.log(resp.data)
//        setTask(resp.data)
//      })
//      .catch(err => console.log(err))
//
//    fetchApi()
//  }, [])
//
//  return (
//    <div>
//      Viewing task id = bla bla bla
//      <div style={{ backgroundColor: 'yellow' }}>
//        <p>rate_float: {task?.rate_float}</p>
//      </div>
//    </div>
//  )
//}

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path='/current'>
          {/* template for /current */}
          <Current />
        </Route>

        <Route path='/history/select'>
          {/* template for /history/select */}
          <Historical />
        </Route>


        <Route path='/history/result'>
          {/* template for /history/result */}
          <HistoricalResult />
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

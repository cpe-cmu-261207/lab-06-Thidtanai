import { useState } from "react"
import { useHistory } from "react-router-dom"



//<div className='text-center space-y-3 space-x-3'>
//            <p className='text-2xl font-semibold'>Select historical range</p>
//            <span>From date</span>
//            <input type='date' onChange={e => console.log(e.target.value)}></input>
//            <span>To date</span>
//            <input type='date' onChange={e => console.log(e.target.value)}></input>
//            <br />
//            <button><Link to='/history/result'>Get data</Link></button>
//          </div>

const Historical = () => {
    const [beginDate, setDate] = useState("")
    const [endDate, setendDate] = useState("")
    let getHistory = useHistory()

    const GetData = () => {
        const begin = Date.parse(beginDate)
        const end = Date.parse(endDate)
        //check
        if (beginDate === "" || endDate === "" || (begin > end)) {
            alert("Plese select start date and end date correctly")
        } else {
            getHistory.push("result?start=" + beginDate + "&end=" + endDate)
        }
    }
    return (
        <div className='text-center space-y-3 space-x-3'>
            <p className='text-2xl font-semibold'>Select historical range</p>
            <span>From date</span>
            <input type='date' onChange={e => console.log(e.target.value)}></input>
            <span>To date</span>
            <input type='date' onChange={e => console.log(e.target.value)}></input>
            <br />
            <button onClick={GetData}>Get data</button>
        </div>
    )
}

export default Historical
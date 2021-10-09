import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useParams, useRouteMatch } from "react-router-dom"



//<div className='text-center space-y-3'>
//            <p className='text-2xl font-semibold'>Historical price</p>
//            <p className='text-2xl'>Loading ...</p>
//            <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
//            <p className='text-xl font-semibold'> ( From 2021-01-01 To 2021-01-02)</p>
//            <ul>
//              <li className='text-xl'>2021-01-01 - {(1000000).toLocaleString()} THB</li>
//              <li className='text-xl'>2021-01-02 - {(2000000).toLocaleString()} THB</li>
//              <li className='text-xl'>2021-01-03 - {(3000000).toLocaleString()} THB</li>
//            </ul>
//          </div>

const HistoricalResult = () => {
    const [beginDate, setbeDate] = useState("")
    const [endDate, setendDate] = useState("")
    const [date, setDate] = useState("")
    const [currPrice, setPrice] = useState<object>({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get("https://api.coindesk.com/v1/bpi/currentprice/thb.json?currency=THB&start=${beginDate}&end=${endDate}")
            .then(resp => {
                setPrice(resp.data.bpi)
                setLoading(true)
            })
            .catch(err => console.log(err))
        setLoading(false)
    }, [])

    const checkLoad = () => {
        if (loading) {
            if (currPrice === {}) return <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
            return (
                <div>
                    <p className='text-xl font-semibold'>(From {beginDate} To {endDate})</p>
                    <ul>
                        <li className='text-xl'>2021-01-01 - {(1000000).toLocaleString()} THB</li>
                        <li className='text-xl'>2021-01-02 - {(2000000).toLocaleString()} THB</li>
                        <li className='text-xl'>2021-01-03 - {(3000000).toLocaleString()} THB</li>
                    </ul>
                </div>
            )
        }
        else return <p className='text-2xl'>Loading...</p>
    }

    return (
        <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Historical price</p>
            {checkLoad()}
        </div>
    )
}

export default HistoricalResult

import axios from "axios";
import { useEffect, useState } from "react";



//{/* template for /current */}
//<div className='text-center space-y-3'>
//<p className='text-2xl font-semibold'>Current price</p>
//<p className='text-2xl'>Loading ...</p>
//<p className='text-2xl'>{(999999999).toLocaleString()} THB</p>
//<p> (Last updated) </p>
//</div>

const Current = () => {
    const [currPrice, setPrice] = useState(0);
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get("https://api.coindesk.com/v1/bpi/currentprice/thb.json")
            .then(resp => {
                setPrice(resp.data.bpi.THB.rate_float)
                setDate(resp.data.time.update)
                setLoading(true)
            })
            .catch(err => console.log(err))
        setLoading(false)
    }, [])

    const checkLoad = () => {
        if (loading) return (
            <div>
                <p className='text-2xl'>{(currPrice).toLocaleString()} THB</p>
                <p>(Last update {date})</p>
            </div>
        )
        else return <p className='text-2xl'>Loading...</p>
    }
    return (
        <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Current price</p>
            {checkLoad()}
        </div>
    )
}

export default Current;
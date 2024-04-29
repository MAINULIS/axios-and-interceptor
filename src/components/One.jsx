// Axios work like fetch but give some extra awesome features.
import axios from 'axios';
import { useEffect, useState } from 'react';

const One = () => {
    const [data, setData] = useState([]);
    //    useEffect(() => {
    //     axios({
    //         method:'get',
    //         url:"/data.json"
    //     })
    //     .then(res => setData(res.data))
    //     console.log(data)
    //    },[data])
    useEffect(() => {
        const url = "data.json";
        axios.get(url)
            .then(res => {
                setData(res.data)
                console.log('from get', res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className='grid grid-cols-3 gap-4 mt-10'>
            {data.slice(0, 6).map((element, index) => {
                return (
                    <div key={index} className='border-2 rounded-md text-start p-3'>
                        <p>userName: {element.userName}</p>
                        <p>name: {element.name}</p>
                        <p>email: {element.email}</p>
                        <p>phone: {element.phone}</p>
                        <p>website: {element.website}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default One;
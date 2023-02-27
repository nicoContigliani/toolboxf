import React from 'react'

const Inputs = (props) => {
    const { onClick } = props
    const { data, setData } = props
    const handlechange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

    }


    return (
        <div className='App'>
            <input
                {...props}
                onChange={handlechange}
                onClick={onClick()}
            />
        </div>
    )
}

export default Inputs

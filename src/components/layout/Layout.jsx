import React, { useState } from 'react'
import Inputs from '../input/Inputs'
import Buttons from '../buttons/Buttons'
import { useSelector, useDispatch } from 'react-redux';
import { fileFilterAsync, selectFile } from '../../features/files/fileSlice'


const Layout = ({ children }) => {
    const dispatch = useDispatch();

    const [data, setData] = useState({ url: 'http:///localhost:3001/files/', body: null, params: null, method: 'get', Token: 'aSuperSecretKey' })

    const onAction = async () => {
         dispatch(fileFilterAsync(data))     
    }

    return (
        <div>
            <header className='header'>
                <h2>React Test App</h2>
            </header>
            <Inputs
                autocomplete="off"
                data={data}
                setData={setData}
                placeholder="test*.csv"
                name="params"
                className="input"
                type="text"
                minlength="1"
                required
                onClick={() => onAction()}
            />
            <br />
    
            {children}

        </div>
    )
}

export default Layout

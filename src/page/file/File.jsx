import React, { useEffect, useState } from 'react'

//import { insuranceAsync, selectInsurance } from '../../features/insurance/insuranceSlice'
import { fileAsync, selectFile } from '../../features/files/fileSlice'
import { useSelector, useDispatch } from 'react-redux';
import Tables from '../../components/table/Tables';



const File = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        onAction()
    }, [])
    const { file } = useSelector(selectFile);


    const data = { url: 'http:///localhost:3001/files/', body: null, params: null, method: 'get', Token: 'aSuperSecretKey' }
    const onAction = async () => {
        dispatch(fileAsync(data))
    }


    return (
        <div>
            <Tables column={file} />
        </div>
    )
}

export default File

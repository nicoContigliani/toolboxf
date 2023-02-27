import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Spinner from '../Spinner/Spinner';




const Tables = ({ column }) => {
  console.log("🚀 ~ file: Tables.jsx:8 ~ Tables ~ column:", column)

  const [data, setData] = useState([])
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    // column.length == 0 ? "" : setData(column)
    if (column.length != 0) {

      const si = column.map(item => {

        const {
          file,
          lines
        } = item

        return lines.map(element => {
          const {
            text,
            number,
            hexa
          } = element
          const all = {
            file,
            text,
            number,
            hexa
          }
          return all

        })

      })
      setData(si.flat())
    }



  }, [column]);

  if (data === undefined) console.log("undefined")

  console.log(data.length === 0)

  return (
    <div className='table'>
      {
        (data.length === 0) ? <Spinner /> :
          <Table striped="columns" bordered hover responsive="xl"  >
            <thead>
              <tr>

                <th>File</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hexadecimal</th>

              </tr>
            </thead>
            <tbody >
              {
                data.map((item,index)=> (

                  <tr key={index}>

                    <td>{item.file}</td>
                    <td>{item.text}</td>
                    <td>{item.number}</td>
                    <td>{item.hexa}</td>

                  </tr>


                ))
              }


            </tbody>
          </Table>

      }




    </div>
  )
}

export default Tables

import React,{ Fragment, useEffect, useState } from "react"

import EditQoute from "./EditQoute"

const ListQoutes = () => {

    const [qoutes,setQoutes] = useState([])

    const deleteQoute = async id => {
        try {
            
            await fetch(
                `http://localhost:5000/home/${id}`,
                {
                    method: "DELETE"
                }
            )

            //console.log(deleteTodo)
            setQoutes(qoutes.filter(qoute => qoute.id !== id))

        } catch (err) {
            console.error(err.message)
        }
    }

    const getQoutes = async () => {
        try {

            const response = await fetch(
                "http://localhost:5000/home"
            )
            const jsonData = await response.json()

            setQoutes(jsonData)
            
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getQoutes()
    }, [])

    //console.log(todos)

    return (
        <Fragment>
            <table class="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Qoute</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {/* <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr> */}
                {qoutes.map(qoute => (
                    <tr key={qoute.id}>
                        <td>{qoute.qoute}</td>
                        <td><EditQoute qoute={qoute}/></td>
                        <td>
                            <button className="btn btn-danger"
                                onClick={() => deleteQoute(qoute.id)}>
                                Delete
                                </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListQoutes
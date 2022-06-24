import React,{ Fragment, useState } from "react"

const InputQoute = () => {

    const [qoute, setQoute] = useState("hello")

    const onSubmitForm = async e => {
        e.preventDefault()
        try {

            const body = { qoute }
            await fetch("http://localhost:5000/home",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            )

            window.location = "/"
            
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">SERN Qoute List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control"
                    value={qoute}
                    onChange={e => setQoute(e.target.value)} />
                <button className="btn btn-success">
                    Add
                </button>
            </form>
        </Fragment>
    )
}

export default InputQoute
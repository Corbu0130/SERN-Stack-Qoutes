import React,{ Fragment, useState } from "react"

const EditQoute = ({qoute}) => {
    //console.log(todo)

    const [Qoute,setQoute] = useState(qoute.qoute)

    const updateQoute = async e => {
        e.preventDefault()

        try {
            
            const body = {Qoute}
            await fetch(
                `http://localhost:5000/home/${qoute.id}`,
                {
                    method: "PATCH",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            )

            //console.log(response)
            window.location = "/"

        } catch (err) {
            console.error(err.message)
        }
    }

    return(
        <Fragment>
            <button 
                type="button" 
                class="btn btn-warning" 
                data-toggle="modal" 
                data-target={`#id${qoute.id}`}
            >
            Edit
            </button>

            <div class="modal" id={`id${qoute.id}`}
                onClick={() => setQoute(qoute.qoute)}
            >
                <div class="modal-dialog">
                    <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Input</h4>
                        <button type="button" class="close" 
                            data-dismiss="modal"
                            onClick={() => setQoute(qoute.qoute)}
                        >&times;
                        </button>
                    </div>

                    <div class="modal-body">
                        <input 
                            type="text" 
                            className="form-control" 
                            value={Qoute}
                            onChange={e => setQoute(e.target.value)}
                        />
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning" 
                            data-dismiss="modal"
                            onClick={e => updateQoute(e)}
                        >Edit
                        </button>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" 
                            data-dismiss="modal"
                            onClick={() => setQoute(qoute.qoute)}
                        >Close
                        </button>
                    </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditQoute
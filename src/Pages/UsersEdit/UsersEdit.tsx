
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'


const UsersEdit = () => {
    

    const params: any = useParams()

    const users = useSelector((name: any) => name.UsersReducer.result)

    console.log(users);

    const getName = (id: number) => {
        for (let index = 0; index < users.length; index++) {
            // const element = array[index];
            if (index === id) {
                console.log(users[index]);
                
            }
            
        }
        return "aea"        
    }
    
    return (
        <div className="page">
            <h1>Users Edit {params._id}</h1>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombres y apellidos</th>
                            <th>Correo electrónico</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input className="form-control form-control-sm" value={getName(params._id)} />
                            </td>
                            <td>
                                <input className="form-control form-control-sm">{}</input>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-success">Ok</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default UsersEdit

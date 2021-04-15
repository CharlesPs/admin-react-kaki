
import React from 'react'
import { useSelector } from 'react-redux'
import { UserType } from '../../Redux/Users.redux'

const Dashboard = () => {

    const users = useSelector((state: any) => state.UsersReducer.result)

    const usuarios_activos = users.filter((user: UserType) => user.status === 1).length

    const usuarios_inactivos = users.length - usuarios_activos

    return (
        <div className="page">
            <h1>
                Page Dashboard
            </h1>

            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>Usuarios registrados</th>
                        <td>{users.length}</td>
                    </tr>
                    <tr>
                        <th>Usuarios activos</th>
                        <td>{usuarios_activos}</td>
                    </tr>
                    <tr>
                        <th>Usuarios inactivos</th>
                        <td>{usuarios_inactivos}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard

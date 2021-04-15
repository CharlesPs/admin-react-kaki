
import React from 'react'
import { useParams } from 'react-router'

const UsersEdit = () => {

    const params: any = useParams()

    return (
        <div className="page">
            <h1>Users Edit {params._id}</h1>
        </div>
    )
}

export default UsersEdit

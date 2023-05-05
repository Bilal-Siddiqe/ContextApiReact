import React from 'react'
import useAuth from '../hooks/useAuth'

function Footer() {

    const {auth, setAuth } = useAuth();

    return (
        <div>

            This is Footer
            <br />

            {auth}


        </div>
    )
}

export default Footer
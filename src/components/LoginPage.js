import React from 'react'
import SawoLogin from 'sawo-react'

const LoginPage = ({setLoggedIn}) => {

    function sawoLoginCallback(payload) {
        setLoggedIn(true)
    }
    
    const sawoConfig = {
        onSuccess: sawoLoginCallback, //required,
        identifierType: 'email', //required, must be one of: 'email', 'phone_number_sms',
        apiKey: process.env.REACT_APP_SAWO_API_KEY, // required, get it from sawo dev.sawolabs.com,
        containerHeight: '230px', // the login container height, default is 230px
    }

    return (
        <div>
            <SawoLogin config={sawoConfig}/>
        </div>
    )
}

export default LoginPage
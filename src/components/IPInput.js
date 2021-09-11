import { useState } from 'react';
import styled from 'styled-components'
import { ReactComponent as ArrowIcon } from '../assets/icons/icon-arrow.svg'


export default function IPInput(props) {
    const [inputValue, setInputValue] = useState('')

    const isValidIp = (ipaddress) => {  
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
            return (true)  
        }  
        
        return false;
    }

    const handleChange = (e) => {
        props.setErrorMessage('')
        setInputValue(e.target.value)
    }

    const handleSubmitAction = () => {
        if (inputValue.length === 0) {
            props.setErrorMessage('Please enter an IP address')
            return
        }
        
        props.setErrorMessage('')

        if (!isValidIp(inputValue)) {
            props.submitAction({domain: inputValue})
        } else {
            props.submitAction({ipAddress: inputValue})
        }
    }

    return (
        <Container>
            <Input type="text" placeholder="Enter IP Address" onChange={handleChange} defaultValue={props.ipAddress}/>
            <ArrowContainer onClick={handleSubmitAction}>
                <ArrowIcon/>
            </ArrowContainer>
        </Container>
    )
}

const Container = styled.div`
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
    height: 50px;
`

const Input = styled.input`
    border-radius: 15px 0px 0px 15px;
    background-color: #fff;
    height: inherit;
    padding: 0px 35px;
    border: none;
    font-size: 18px;
    font-weight: 500;
`

const ArrowContainer = styled.button`
    border: none;
    background: black;
    height: inherit;
    width: 55px;
    border-radius: 0px 15px 15px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
import { useState } from 'react';
import styled from 'styled-components'
import { ReactComponent as ArrowIcon } from '../assets/icons/icon-arrow.svg'


export default function IPInput(props) {
    const [ip, setIp] = useState('')

    return (
        <Container>
            <Input type="text" placeholder="Enter IP Address" onChange={(e) => setIp(e.target.value)} defaultValue={props.ipAddress}/>
            <ArrowContainer onClick={() => props.click(ip)}>
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
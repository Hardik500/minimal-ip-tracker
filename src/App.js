import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components'

import heroImage from './assets/images/pattern-bg.png'

import IPInfo from './components/IPInfo'
import IPInput from './components/IPInput'
import Map from './components/Map'
import LoginPage from './components/LoginPage';

function App() {
  const [position, setPosition] = useState([34.80746, -40.4796]);
  const [ipInformation, setIpInformation] = useState({})
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchPosition({ipAddress: ''})
  }, [])

  const fetchPosition = useCallback(async ({ipAddress, domain = ''}) => {
    try {
      const result = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}&ipAddress=${ipAddress}&domain=${domain}`)
      const data = await result.json();
      const {
        ip,
        location,
        isp
      } = data;

      setPosition([location.lat, location.lng]);
      setIpInformation({
        ip: ip,
        location: data.location.country,
        isp: isp,
        timezone: data.location.timezone
      });

    } catch (error) {
      setErrorMessage('Wrong IP Address or Domain');
      console.log(error)
    }

  }, [])

  if (isLoggedIn) {
    return (
      <div className="container">
        <NavContainer>
          <h2 style={{ color: 'white' }}>IP Address Tracker</h2>
          <IPInput ipAddress={ipInformation?.ip} submitAction={fetchPosition} setErrorMessage={setErrorMessage}/>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </NavContainer>
        <IPDetailContainer isLoggedIn={isLoggedIn}>
          <IPInfo heading={ipInformation?.ip} subheading={'IP Address'} />
          <IPInfo heading={ipInformation?.location} subheading={'Location'} />
          <IPInfo heading={ipInformation?.timezone} subheading={'Timezone'} />
          <IPInfo heading={ipInformation?.isp} subheading={'ISP'} />
        </IPDetailContainer>
        <Map position={position} />
      </div>
    );
  }

  return <LoginPage setLoggedIn={setLoggedIn} />
}

export default App

const NavContainer = styled.div`
  background: url(${heroImage}) no-repeat center center; 
  background-size: cover;
  height: 250px;
  width: auto;
  text-align: center;
  padding-top: 25px;

  @media (min-width: 1440px) {
    background: url(${heroImage}) no-repeat center center; 
    height: 30vh;
    background-size: cover;
  }
`

const IPDetailContainer = styled.div`
  background: #fff;
  padding: 20px;
  padding-top: 0px;
  margin-top: -90px;
  position: absolute;
  z-index: 9999;
  border-radius: 15px;
  left: 0;
  right: 0;
  border: none;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);

  @media (min-width: 1440px) {
    width: 50%; 
  }
`

const ErrorMessage = styled.p`
  color:#ff7bca;
  font-size: 1.2rem;
  margin-top: 10px;
`
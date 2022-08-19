import styled from 'styled-components';
import { useEffect }from 'react';
import { getWeathers } from '../api/Weathers'
import { useState } from 'react'

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Weather = () => {
    const [weatherList, setWeatherList] = useState("")
  
    useEffect(() => {
      getWeathers().then((res) => {
        setWeatherList(res.data)
      })
    },[])

    return ( 
    <Container>
              <p>{JSON.stringify(weatherList)}</p>
    </Container> );
}
 
export default Weather;
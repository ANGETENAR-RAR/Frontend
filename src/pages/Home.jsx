import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../requests'

const Home = () => {
  return (
    <>
        <Main/>
        <Row  rowID='1' title="Upcoming" fetchURL={requests.requestUpcoming}/>
        
        <Row rowID='2' title="Popular" fetchURL={requests.requestPopular}/>
        {/* <Row title="Trending" fetchURL={requests.requestTrending}/> */}
        <Row rowID='3' title="Top Rated" fetchURL={requests.requestTopRated}/>
        {/* <Row title="Horror" fetchURL={requests.requestHorror}/> */}
    </>
  )
}

export default Home
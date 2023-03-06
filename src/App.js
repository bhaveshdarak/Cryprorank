import './App.css';
import {  Link, Route, Routes } from 'react-router-dom';
import Navbar from "../src/component/Navbar"
import { Layout, Space, Typography } from 'antd';
import HomePage from './component/HomePage';
// import Exchanges from './component/Exchanges';
import Cryptocurrencies from './component/Cryptocurrencies';
import News from './component/News';
import CryptoDetails from './component/CryptoDetails';

function App() {
  return (
    <div className='app'>
     <div className='navbar'>
         <Navbar/>
     </div>
     <div className='main'>
      <Layout>
          <div className='routes'>
              <Routes>
                  <Route path='/' element={<HomePage/>}/>
                  <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                  <Route path='/crypto/:coinId' element={<CryptoDetails />}/>
                  <Route path='/news' element={<News/>}/>
              </Routes>
          </div>
      </Layout>
     <div className='footer'>
       <Typography.Title level={5} style={{color:'white',textAlign: "center" }}>
           Cryptorank <br/>
           All right reserved
       </Typography.Title>
       <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
       </Space>
     </div>
     </div>
    </div>
  );
}

export default App;

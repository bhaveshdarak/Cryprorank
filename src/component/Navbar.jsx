import React, { useEffect, useState } from 'react'
import {  Menu , Typography , Avatar, Button } from 'antd'
import { Link } from 'react-router-dom'
import ico from "../images/download.jpeg"
import { BulbOutlined, FundOutlined, HomeOutlined, MenuOutlined} from '@ant-design/icons'
function Navbar() {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);
  
    useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);
  
      window.addEventListener('resize', handleResize);
  
      handleResize();
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(() => {
      if (screenSize <= 800) {
        setActiveMenu(false);
      } else {
        setActiveMenu(true);
      }
    }, [screenSize]);
  return (
    <div className="nav-container">
    <div className="logo-container">
      <Avatar src={ico} size="large" />
      <Typography.Title level={2} className="logo"><Link to="/">Cryptorank</Link></Typography.Title>
      <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
    </div>
    {activeMenu && (
    <Menu theme="dark">
      <Menu.Item icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item icon={<FundOutlined />}>
        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
      </Menu.Item>
      <Menu.Item icon={<BulbOutlined />}>
        <Link to="/news">News</Link>
      </Menu.Item>
    </Menu>
    )}
  </div>
  )
}

export default Navbar
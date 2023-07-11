import React,{useState} from 'react';
import {Button} from'@material-ui/core';
import css from './Sidebar.css';
import {Link} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { styled } from 'styled-components';
import {SidebarData} from './SidebarData'
import SubMenu from './SubMenu';
import { AiOutlineUser , AiOutlineMenu} from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Nav = styled.div`
// background-image: linear-gradient(to bottom right, rgb(180, 222, 247), rgb(245, 157, 226));
height : 80px;
display:flex;
justify-content: flex-end;
align-items: center;

`;

const NavIcon = styled(Link)`
margin-right: 1rem;
font-size: 2rem;
height:60px;
gap:2rem;
display:flex;
align-items: center;
text-decoration:none;
// justify-content:space-between;

`;

const SidebarNav = styled.nav`
background: rgb(245, 157, 226);
color : #0000FF;
width:250px;
height:100vh;
display:flex;
justify-content: flex-end;
position:fixed;
top:0;
right:${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition:350ms;
z-index:100%;
`;

const SidebarWrap = styled.div`
width:100%;
color : #0000FF;
justify-content:flex-end;
`;

const Title = styled.div`
padding-left:5px;
align-items: center;
display:flex;
justify-content:flex-start;
flex:1;
`;

const Header = styled.div`
padding-left: 1.5rem;
padding-right: 1.5rem;
display: flex;
background-color: linear-gradient(to bottom right, rgb(180, 222, 247), rgb(245, 157, 226));
margin-top: -2rem;
margin-bottom: -2rem;
align-items:center;

`;

const Search = styled.button`
 background:linear-gradient(to bottom right, rgb(180, 222, 247), rgb(245, 157, 226));
 color:black;
 border:0;
 border-radius:3px;
 width:5rem;
 border-opacity:10px;
`;

const Head = styled.div`
 position:fixed;
 background-image: linear-gradient(to bottom right, rgb(180, 222, 247), rgb(245, 157, 226));
 height : 80px;
 width:100%;
 align-items:center;
 top:0;
`;





function Sidebar() {

	const [sidebar,setSidebar] = useState(false)

	const showSidebar = ()=>setSidebar(!sidebar);

	return (
		<Head>
		<Header>
		<Title>
        <h4 className='high'>Packup</h4>
		
      </Title>
	  <Nav>
	  
		<NavIcon to = '#'>
			<input placeholder='Search'></input>
			<Search>Search</Search>
			
		<AiOutlineUser / >
               <FiShoppingCart />
          <FaIcons.FaBars onClick={showSidebar} />
		</NavIcon>
	  </Nav>
	  </Header>
	
	  <SidebarNav sidebar={sidebar}>
       <SidebarWrap>
	   
		<NavIcon to = '#'>
		
			<AiIcons.AiOutlineClose onClick={showSidebar}/>
		</NavIcon>
		{SidebarData.map((item,index)=>{
			return <SubMenu item={item} key={index} />;
		})}
		</SidebarWrap>
	  </SidebarNav>
	  </Head>
	);
  }
  
  export default Sidebar;
import React from "react";
import {Nav, NavLink, NavMenu} from './MenuElements'

const Menu = () => {
    return (
    <>
        <Nav>
            <NavMenu>
                <NavLink to = "/ReadBlog">
                    Blogs
                </NavLink>
                <NavLink to ="/BlogsForm" >
                    Blog_Form
                </NavLink>
                <NavLink to = "/Person"  >
                    Person
                </NavLink>
                {/* <NavLink to = "/PersonsList"  >
                    Person_List
                </NavLink> */}
                <NavLink to ="/Bookmarks" >
                    Bookmarks
                </NavLink>
                <NavLink to ="/Blogs_CRUD" >
                    Blogs_CRUD
                </NavLink>

            </NavMenu>
        </Nav>
            
    </>
    );
};

export default Menu;
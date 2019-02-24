import React from "react";
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    color: white;
    padding: 0 10px;
    background-color: rgba(20, 20, 20, 0.8);
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 50px;
    height: 50px;
    text-align: center;
    border-bottom: 5px solid 
    ${props => (props.current ? "red" : "transparent")};
    transition: 0.5s ease-in-out;
`;

const SLink = styled(Link)`
    width: 50px;
    height: 50px;
    display:flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter ( ({location:{pathname}} ) => (
    <Header>
        {console.log(pathname)}
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname ==="/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
))
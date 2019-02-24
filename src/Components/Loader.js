import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    font-size: 24px;
    font-weight: bold;
    color: #7f8c8d;
`;

export default () => (
    <Container>
        <span role="img" aria-label="Loading">
            Loading
        </span>
    </Container>)
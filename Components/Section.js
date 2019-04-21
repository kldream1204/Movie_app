import React from "react";
import PropTypes from "prop-types"; 
import styled from "styled-components";

const Container = styled.div`
    :not(:last-child) {
        margin-bottom: 50px;
    }
`;

const Title = styled.span`
    font-size: 14px;
    font-weight:bold;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 125px);
    grid-gap: 20px;
    margin-top: 50px;   
`;

const Section = ({title, children}) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>
);

Section.prototype = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Section;
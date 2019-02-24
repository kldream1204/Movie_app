import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
     width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    `;

const Text = styled.span`
    color: ${props => props.color};
    font-size: 24px;
    font-weight: bold;
`;

const Message = ({text, color}) => (
    <Container>
        <Text color={color}>
            {text}
        </Text>
    </Container>
)

Message.prototype = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string    
}

export default Message;
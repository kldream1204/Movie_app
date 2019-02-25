import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
    font-size: 12px;
`;


const Img = styled.div`
    height: 180px;
    background-image: url(${proprs => proprs.bgUrl});
    background-size: cover;
    background-position: center;
    border-radius: 4px;
`;

const Rating = styled.span`
    position: absolute;
    bottom: 5px;
    right: 5px;
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const ImgContainer = styled.div`
    position: relative;
    &:hover {
        ${Img} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1;
        }
    }
`;

const Title = styled.span`
    display: block;
    font-size: 16px;
    margin-top: 5px;    
`;

const Year = styled.span`
    color: #7f8c8d;
`;

const Poster = ({ id, title, img, rating, year, isMovie}) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
        <ImgContainer>
            <Img bgUrl={ img ? `https://image.tmdb.org/t/p/w500${img}` : require("../assets/no-image.jpg")}></Img>
            <Rating>
                <span>
                    <span>{rating}/10</span> 
                </span>            
                <span>
                    { rating < 2 && rating >= 0 ? "☆☆☆☆☆" : ""}
                    { rating < 4 && rating >= 2 ? "★☆☆☆☆" : ""}
                    { rating < 6 && rating >= 4 ? "★★☆☆☆" : ""}
                    { rating < 8 && rating >= 6 ? "★★★☆☆" : ""}
                    { rating < 10 && rating >= 8 ? "★★★★☆" : ""}
                    { rating === 10 ? "★★★★★" : "" }
                </span>
            </Rating>
        </ImgContainer>
        <Title>
            {title.length > 12 ? `${title.substring(0, 12)}...` : title }
        </Title>
        <Year>{year}</Year>
    </Container>
    </Link>
)

Poster.prototype = {
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    img: Proptypes.string,
    rating: Proptypes.number,
    year: Proptypes.string,
    isMovie: Proptypes.bool
}

export default Poster;
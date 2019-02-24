import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
    width: 125px;
    height: 100px;
`;

const ImgContainer = styled.div``;

const Img = styled.div`
    width: 125px;
    height: 100px;
    background-image: ${proprs => proprs.bgUrl};
`;

const Rating = styled.span``;

const Title = styled.span``;

const Year = styled.span``;

const Poster = ({ id, title, img, rating, year, isMovie}) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
        <ImgContainer>
            <Img bgUrl={`https://image.tmdb.org/t/p/w300${img}`}></Img>
            <Rating>
                { rating < 2 && rating >= 0 ? "☆☆☆☆☆" : ""}
                { rating < 4 && rating >= 2 ? "★☆☆☆☆" : ""}
                { rating < 6 && rating >= 4 ? "★★☆☆☆" : ""}
                { rating < 8 && rating >= 6 ? "★★★☆☆" : ""}
                { rating < 10 && rating >= 8 ? "★★★★☆" : ""}
                { rating === 10 ? "★★★★★" : "" }
                {rating}/10
            </Rating>
        </ImgContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
    </Container>
    </Link>
)

Poster.prototype = {
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    img: Proptypes.string,
    rating: Proptypes.number,
    year: Proptypes.string
}

export default Poster;
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position:relative;
    padding: 50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgUrl});
    background-size: cover;
    background-position: center;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${props => props.bgUrl});
    background-size: cover;
    background-position: center;
`;

const Data = styled.div``;

const Title = styled.span``;

const InfoContainer =styled.div``;

const Date = styled.span``;

const RunTime = styled.span``;

const Genres = styled.span``;

const Overview = styled.span``;

const DetailPresenter = ({Detail, error, loading}) => 
    loading ? 
        <Loader/>
        :(
            <Container>
                <Backdrop bgUrl={`https://image.tmdb.org/t/p/w500${Detail.backdrop_path}`}/>
                <Content>
                    <Cover bgUrl={ Detail.poster_path ? `https://image.tmdb.org/t/p/w500${Detail.poster_path}` : require("../../assets/no-image.jpg")}/>
                    <Data>
                        <Title>
                            {Detail.original_title}
                        </Title>
                        <InfoContainer>
                            <Date>
                                {Detail.release_date.substring(0, 4)}
                            </Date>
                            <RunTime>
                                {Detail.runtime}min
                            </RunTime>
                            <Genres>
                            </Genres>
                        </InfoContainer>
                        <Overview>
                            {Detail.overview}
                        </Overview>
                    </Data>
                </Content>
            </Container>
        )

DetailPresenter.propTypes = {
    Detail:PropTypes.object,
    error:PropTypes.string, 
    loading:PropTypes.bool.isRequired
}

export default DetailPresenter;
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
    margin: 50px 20px;   
`;

const HomePresenter = ({nowPlaying, upComing, popular, error, loading}) => 
    loading ? (
        <Loader/>
    )
    : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
            <Section title="NOW PLAYING">
                {nowPlaying.map( movie => 
                    <Poster key={movie.id}
                            id={movie.id} 
                            title={movie.original_title}
                            img={movie.poster_path}
                            rating={movie.vote_average} 
                            year={movie.release_date.substring(0, 4)} 
                            isMovie={true}
                            />
                )}
            </Section>
            )}
            {upComing && upComing.length > 0 && (
            <Section title="UPCOMING MOVIES">
                {upComing.map( movie => 
                    <Poster key={movie.id}
                            id={movie.id} 
                            title={movie.original_title}
                            img={movie.poster_path}
                            rating={movie.vote_average} 
                            year={movie.release_date.substring(0, 4)} 
                            isMovie={true}
                            />
                )}
            </Section>
            )}
            {popular && popular.length > 0 && (
            <Section title="POPULAR MOVIES">
                {popular.map( movie => 
                    <Poster key={movie.id}
                            id={movie.id} 
                            title={movie.original_title}
                            img={movie.poster_path}
                            rating={movie.vote_average} 
                            year={movie.release_date.substring(0, 4)} 
                            isMovie={true}
                            />
                )}
            </Section>
            )}
            { error && (<Message text={error} color="#e74c3c"/>) }
        </Container>
    )

HomePresenter.propTypes = {
    nowPlaying:PropTypes.array,
    upComing:PropTypes.array, 
    popular:PropTypes.array, 
    error:PropTypes.string, 
    loading:PropTypes.bool.isRequired
}

export default HomePresenter;
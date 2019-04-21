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

const TVPresenter = ({airingToday, topRated, popular, error, loading}) => 
    loading ? (
    <Loader/>
    ): (
        <Container>
            {airingToday && airingToday.length > 0 && (
            <Section title="AIRING TODAY">
                {airingToday.map( show => 
                    <Poster key={show.id}
                            id={show.id}
                            title={show.original_name}
                            img={show.poster_path}
                            rating={show.vote_average}
                            year={show.first_air_date.substring(0, 4)}
                            isMovie={false}
                    />
                )}
            </Section>
            )}
            {topRated && topRated.length > 0 && (
            <Section title="TOP RATED TV SHOW">
                {topRated.map( show => 
                    <Poster key={show.id}
                            id={show.id}
                            title={show.original_name}
                            img={show.poster_path}
                            rating={show.vote_average}
                            year={show.first_air_date.substring(0, 4)}
                            isMovie={false}
                    />
                )}
            </Section>
            )}
            {popular && popular.length > 0 && (
            <Section title="POPULAR TV SHOW">
                {popular.map( show => 
                    <Poster key={show.id}
                            id={show.id}
                            title={show.original_name}
                            img={show.poster_path}
                            rating={show.vote_average}
                            year={show.first_air_date.substring(0, 4)}
                            isMovie={false}
                    />
                )}
            </Section>
            )}
            { error && (<Message text={error} color="#e74c3c"/>)}
        </Container>
    )

TVPresenter.propTypes = {
    topRated:PropTypes.array,
    popular:PropTypes.array, 
    airingToday:PropTypes.array, 
    error:PropTypes.string, 
    loading:PropTypes.bool.isRequired
}

export default TVPresenter;
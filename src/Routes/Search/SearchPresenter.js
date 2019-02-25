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

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all:unset;
    width: 100%;
`;

const SearchPresenter = ({movieResults, showResults, searchTerm, error, loading, handleSubmit, inputChange}) => 
    (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Search Movie or TV Show..." value={searchTerm} onChange={inputChange}/>
            </Form>
            {loading ? (<Loader/>) : 
            (<>
                {movieResults && movieResults.length > 0 && 
                    (<Section title="Movie Results">
                        {movieResults.map( movie =>
                            <Poster key={movie.id}
                                    id={movie.id} 
                                    title={movie.original_title}
                                    img={movie.poster_path}
                                    rating={movie.vote_average} 
                                    year={movie.release_date.substring(0, 4)} 
                                    isMovie={true}
                                    />
                        )}
                    </Section>)}
                {showResults && showResults.length > 0 && 
                    (<Section title="TV SHOW Results">
                       {showResults.map( show => 
                            <Poster key={show.id}
                                    id={show.id}
                                    title={show.original_name}
                                    img={show.poster_path}
                                    rating={show.vote_average}
                                    year={show.first_air_date.substring(0, 4)}
                                    isMovie={false}
                    />
                )}
                    </Section>)} 
                { error && <Message text={error} color="#e74c3c"/>}
                { movieResults && showResults && movieResults.length === 0 && showResults.length === 0 && (
                    <Message text="Can't find anything" color="#7f8c8d"/>
                )}       
            </>) }
        </Container>
    )

SearchPresenter.propTypes = {
    movieResults:PropTypes.array, 
    showResults:PropTypes.array,    
    searchTerm:PropTypes.string, 
    error:PropTypes.string, 
    loading:PropTypes.bool.isRequired,
    handleSubmit:PropTypes.func.isRequired,
    inputChange:PropTypes.func.isRequired
}

export default SearchPresenter; 
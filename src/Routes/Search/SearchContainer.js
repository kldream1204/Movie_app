import React from "react";
import SearchPresenter from "./SearchPresenter";
import { MoviesApi, TVApi } from "../../api";

export default class extends React.Component {
    state = {
        movieResults: null,
        showResults: null,
        searchTerm: "",
        error: null,
        loading: false
    }

    inputChange = (event) => {
        const {target:{value}} = event;
        this.setState({
            searchTerm: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {searchTerm} = this.state;
        if( searchTerm !== "" ){
            this.searchByTerm();
        }
    }


    searchByTerm = async () => {
        const {searchTerm} = this.state
        try{
            this.setState({
                loading: true
            })
            const {data:{results:movieResults}} = await MoviesApi.search(searchTerm)
            const {data:{results:showResults}} = await TVApi.search(searchTerm)
            this.setState({
                movieResults,
                showResults
            })
        }catch(error) {
            this.setState({
                error: "Can't find result"
            })
            console.log(error)
        }finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        console.log(this.state);
        const {showResults, movieResults, searchTerm, error, loading} = this.state;
        return <SearchPresenter
        showResults={showResults}
        movieResults={movieResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        inputChange={this.inputChange}
        />
    }
}
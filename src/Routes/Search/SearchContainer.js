import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
    state = {
        showSearch: null,
        movieSearch: null,
        error: null,
        loading: true
    }

    render() {
        const {showSearch, movieSearch, error, loading} = this.state;
        return <SearchPresenter
        showSearch={showSearch}
        movieSearch={movieSearch}
        error={error}
        loading={loading}
        />
    }
}
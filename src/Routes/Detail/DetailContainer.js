import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
    state = {
        movieDetail: null,
        showDetail: null,
        error: null,
        loading: true       
    }

    render() {
        const {movieDetail, showDetail, error, loading} = this.state;
        return <DetailPresenter
        movieDetail={movieDetail}
        showDetail={showDetail}
        error={error}
        loading={loading}
        />;
    }
}
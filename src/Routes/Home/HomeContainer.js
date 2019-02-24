import React from "react";
import HomePresenter from "./HomePresenter";
import { MoviesApi } from "../../api";

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upComing: null,
        popular: null,
        error: null,
        loading: true
    }

    async componentDidMount() {
        try{
            const {data:{results:nowPlaying}} = await MoviesApi.nowPlaying();
            const {data:{results:upComing}} = await MoviesApi.upComing();
            const {data:{results:popular}} = await MoviesApi.popular();
            this.setState({
                nowPlaying,
                upComing,
                popular
            })
        }catch(error) {
            this.setState({
                error: "Can't find Movie information."
            })
        }finally{
            this.setState({
                loading: false
            });
        }
    }

    render() {
        console.log(this.state)
        const {nowPlaying, upComing, popular, error, loading} = this.state;
        return <HomePresenter 
        nowPlaying={nowPlaying} 
        upComing={upComing} 
        popular={popular}
        error={error}
        loading={loading}
        />;
    }
}
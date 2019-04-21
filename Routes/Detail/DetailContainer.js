import React from "react";
import DetailPresenter from "./DetailPresenter";
import { MoviesApi, TVApi } from "../../api";

export default class extends React.Component {
    state = {
        Detail: null,
        error: null,
        loading: true       
    }

    async componentDidMount() {
        console.log(this.props)
        const {match:{params:{id}},
               history:{push}, 
               location:{pathname}} = this.props;
        const parseId = parseInt(id);
        this.isMovie = pathname.includes("movie");            
        if (isNaN(parseId)) {
           return push("/")
        }
        try{
            if(this.isMovie) {
                const {data:Detail} = await MoviesApi.movieDetail(parseId);
                this.setState({
                    Detail
                });
            }else {
                const {data:Detail} = await TVApi.showDetail(parseId);
                this.setState({
                    Detail
                });
            }
            
        }catch(error) {
            this.setState({
                error: "Can't find anything."
            })
        }finally{
            this.setState({
                loading:false
            })
        }
    }

    render() {
        const {Detail, error, loading} = this.state;
        console.log(this.state);
        return <DetailPresenter
        Detail={Detail}
        error={error}
        loading={loading}
        />;
    }
}
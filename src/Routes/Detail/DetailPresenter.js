import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({Detail, error, loading}) => null

DetailPresenter.propTypes = {
    Detail:PropTypes.object,
    error:PropTypes.string, 
    loading:PropTypes.bool.isRequired
}

export default DetailPresenter;
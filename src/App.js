import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentImage } from './index';
import ImageGallery from './components/ImageGallery';
import * as imageChangeActions from './actions/ImageChange';
import './App.scss';

const mapStateToProps = (state, ownProps) => (
    {
        currentImage: getCurrentImage(state)
    }
);


const App = connect(
    mapStateToProps,
    imageChangeActions
)(ImageGallery);

export default App;
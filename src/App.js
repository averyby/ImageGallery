import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentDemoImage } from './index';
import ImageGallery from './components/ImageGallery';
import * as imageChangeActions from './actions/ImageChange';
import './App.scss';

const mapStateToProps = (state, ownProps) => (
    {
        currentImage: getCurrentDemoImage(state)
    }
);


const App = connect(
    mapStateToProps,
    imageChangeActions
)(ImageGallery);

export default App;
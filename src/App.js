import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNumberOfUserGalleries } from './index';
import GallerySection from './components/GallerySection';
import './App.scss';

const mapStateToProps = (state, ownProps) => (
    {
        numberOfUserGalleries: getNumberOfUserGalleries(state)
    }
);

class App extends Component {
    render() {
        return (
            <div>
                <GallerySection demo />
                <div>{this.props.numberOfUserGalleries}</div>
            </div>
        );
    }
}

App = connect(mapStateToProps)(App);

export default App;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentDemoImage } from './index';
import GallerySection from './components/GallerySection';
import * as imageChangeActions from './actions/ImageChange';
import './App.scss';

const mapStateToProps = (state, ownProps) => (
    {
        currentDemoImage: getCurrentDemoImage(state),

    }
);

class App extends Component {
    render() {
        let { currentDemoImage, ...rest } = this.props;
        return (
            <div>
                <GallerySection currentImage={currentDemoImage} {...rest}/>
            </div>
        );
    }
}

App = connect(
    mapStateToProps,
    imageChangeActions
)(App);

export default App;
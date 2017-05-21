import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getNumberOfUserGalleries } from './index';
import GallerySection from './components/GallerySection';
import * as galleryActions from './actions/GalleryActions';
import styles from './App.scss';

const mapStateToProps = (state, ownProps) => (
    {
        userGalleryCount: getNumberOfUserGalleries(state)
    }
);

class App extends PureComponent {

    generateUserGalleries() {
        let n = this.props.userGalleryCount;
        const galleries = [];
        for (let i = 0; i < n; i++) {
            galleries.push(
                <GallerySection index={i} key={i}  />
            );
        }
        return galleries;
    }

    createGallery = () => this.props.createGallery();

    render() {
        return (
            <div>
                <a class={styles.createGallery} onClick={this.createGallery}>
                    <span><span id="specialFont">点此</span>创建新影集</span>
                </a>
                <div class={styles.container}>
                    <div class={styles.galleries}>
                        <GallerySection demo />
                        {this.generateUserGalleries()}
                    </div>
                </div>
            </div>
        );
    }
}

App = connect(
    mapStateToProps,
    galleryActions
)(App);

export default App;
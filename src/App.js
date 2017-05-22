import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUserGalleries } from './index';
import GallerySection from './components/GallerySection';
import * as galleryActions from './actions/GalleryActions';
import styles from './App.scss';

const mapStateToProps = (state, ownProps) => (
    {
        userGalleries: getUserGalleries(state)
    }
);

class App extends PureComponent {

    generateUserGalleries() {
        const { userGalleries } = this.props;
        const galleries = [];

        for(let id in userGalleries) {
            galleries.push(<GallerySection id={id} key={id} />);
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
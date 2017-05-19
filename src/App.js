import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getNumberOfUserGalleries } from './index';
import GallerySection from './components/GallerySection';
import styles from './App.scss';

const mapStateToProps = (state, ownProps) => (
    {
        numberOfUserGalleries: getNumberOfUserGalleries(state)
    }
);

class App extends PureComponent {

    generateUserGalleries() {
        let n = this.props.numberOfUserGalleries;
        const galleries = [];
        for (let i = 0; i < n; i++) {
            galleries.push(
                <GallerySection index={i} key={i} />
            );
        }
        return galleries;
    }

    render() {
        return (
            <div class={styles.container}>
                <div class={styles.galleries}>
                    <GallerySection demo />
                    {this.generateUserGalleries()}
                </div>
            </div>
        );
    }
}

App = connect(mapStateToProps)(App);

export default App;
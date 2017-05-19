import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageGallery from './ImageGallery';
import { getCurrentDemoImage, getCurrentUserImage } from '../index';
import * as imageChangeActions from '../actions/ImageChange';
import styles from '../styles/GallerySection.scss';

class GallerySection extends Component {
    render() {
        return (
            <div class={styles.sectionContainer}>
                <div class={styles.controlSection}></div>
                <ImageGallery {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let currentImage;
    if (ownProps.demo) {
        currentImage = getCurrentDemoImage(state);
    } else {
        currentImage = getCurrentUserImage(state, ownProps.index);
    }
    return { currentImage };
};

GallerySection = connect(
    mapStateToProps,
    imageChangeActions
)(GallerySection);

export default GallerySection;
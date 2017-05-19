import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ImageGallery from './ImageGallery';
import { getCurrentDemoImage, getCurrentUserImage } from '../index';
import ControlSection from './ControlSection';
import * as imageChangeActions from '../actions/ImageChange';
import styles from '../styles/GallerySection.scss';

class GallerySection extends PureComponent {
    render() {
        return (
            <div class={styles.sectionContainer}>
                <ControlSection {...this.props} />
                <ImageGallery {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let currentImage = ownProps.demo 
                        ? getCurrentDemoImage(state)
                        : getCurrentUserImage(state, ownProps.index);

    return { 
        currentImage,
        
    };
};

GallerySection = connect(
    mapStateToProps,
    imageChangeActions
)(GallerySection);

export default GallerySection;
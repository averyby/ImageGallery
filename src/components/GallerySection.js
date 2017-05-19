import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ImageGallery from './ImageGallery';
import { 
    getCurrentDemoImage, 
    getCurrentUserImage,
    getDemoGalleryStatus,
    getUserGalleryStatus 
} from '../index';
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
    const getCurrentImage = ownProps.demo ? getCurrentDemoImage : getCurrentUserImage;
    const getPlayingStatus = ownProps.demo ? getDemoGalleryStatus : getUserGalleryStatus;

    return { 
        currentImage: getCurrentImage(state, ownProps.index),
        playing: getPlayingStatus(state, ownProps.index)
    };
};

GallerySection = connect(
    mapStateToProps,
    imageChangeActions
)(GallerySection);

export default GallerySection;
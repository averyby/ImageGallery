import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ImageGallery from './ImageGallery';
import { getCurrentImage, getPlayingStatus, getImageCount } from '../index';
import ControlSection from './ControlSection';
import * as imageChangeActions from '../actions/ImageChange';
import * as galleryActions from '../actions/GalleryActions';
import styles from '../styles/GallerySection.scss';

class GallerySection extends PureComponent {

    componentDidMount = () => !this.props.demo && this.g.scrollIntoView();

    render() {
        return (
            <div class={styles.sectionContainer} ref={g => this.g = g}>
                <ControlSection {...this.props} />
                <ImageGallery {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({ 
        currentImage: getCurrentImage(state, ownProps),
        playing: getPlayingStatus(state, ownProps),
        imageCount: getImageCount(state, ownProps)
    });

GallerySection = connect(
    mapStateToProps,
    { ...imageChangeActions, ...galleryActions }
)(GallerySection);

export default GallerySection;
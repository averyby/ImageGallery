import React, { Component } from 'react';
import ImageGallery from './ImageGallery';
import styles from '../styles/GallerySection.scss';

export default class GallerySection extends Component {
    render() {
        return (
            <div class={styles.sectionContainer}>
                <div class={styles.controlSection}></div>
                <ImageGallery {...this.props} />
            </div>
        );
    }
}
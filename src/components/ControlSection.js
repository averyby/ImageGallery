import React, { Component } from 'react';
import Button from './UIComponents/Button';
import ImageInput from './ImageInput';
import styles from '../styles/ControlSection.scss';

export default class ControlSection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleButtonClick = () => {
        const { togglePlaying, ...rest } = this.props;

        togglePlaying(rest);
    };

    getUrls = (images) => {
        if (!images || !images.length) return;
        const { index } = this.props;
        images = images.map(
            (img, idx) => window.URL.createObjectURL(img)
        );
        this.props.addImages({ index, images });
    };

    render() {
        const { playing, demo, ...rest } = this.props;
        const ImageFileInput = 
            <ImageInput {...rest} onImagesReceive={this.getUrls} />;

        return (
            <div class={styles.controlSection}>
                { !demo ? ImageFileInput : null }
                <div class={styles.buttonArea}>
                    <Button onClick={this.handleButtonClick}>
                        {playing ? '暂停' : '播放'}
                    </Button>
                </div>
            </div>
        );
    }
}
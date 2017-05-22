import React, { Component } from 'react';
import Button from './UIComponents/Button';
import ImageInput from './ImageInput';
import styles from '../styles/ControlSection.scss';

export default class ControlSection extends Component {

    handleButtonClick = () => {
        const { togglePlaying, ...rest } = this.props;

        togglePlaying(rest);
    };

    getImages = (images) => {
        if (!images || !images.length) return;
        const { id } = this.props;
        images = images.map(
            (img, idx) => ({
                name: img.name,
                imgUrl: window.URL.createObjectURL(img)
            })
        );
        this.props.addImages({ id, images });
    };

    handleDelete = () => this.props.deleteGallery(this.props.id);
    
    render() {
        const { playing, demo, imageCount, ...rest } = this.props;
        const ImageFileInput = <ImageInput {...rest} onImagesReceive={this.getImages} />;
        const deleteButton = (
            <Button onClick={this.handleDelete} 
                    style={{ backgroundColor: '#EFF296', color: 'black', flex: 1 }}>删除</Button>
        );

        return (
            <div class={styles.controlSection}>
                { !demo ? ImageFileInput : null }
                <div class={styles.buttonArea}>
                    { imageCount > 1 ? 
                    <Button onClick={this.handleButtonClick}>
                        {playing ? '暂停' : '播放'}
                    </Button> : null }
                    { !demo ? deleteButton : null }
                </div>
            </div>
        );
    }
}
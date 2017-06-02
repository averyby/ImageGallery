import React, { Component } from 'react';
import Button from './UIComponents/Button';
import ImageInput from './ImageInput';
import styles from '../styles/ControlSection.scss';

export default class ControlSection extends Component {

    handleButtonClick = () => {
        const { togglePlaying, ...rest } = this.props;

        togglePlaying(rest);
    };

    getImages = async (images) => {
        if (!images || !images.length) return;
        const { id } = this.props;
        let imgInfos = [];
        for(let i = 0; i < images.length; i++) {
            imgInfos.push(await this.getImageInfo(images[i]));
        }
        // imgInfos = images.map(
        //     async img => {
        //         let imgInfo = await this.getImageInfo(img);
        //         debugger;
        //         return imgInfo;
        //     }
        // );
        this.props.addImages({ id, images: imgInfos });
    };

    getImageInfo = (img) => {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();

            reader.onload = () => resolve({
                name: img.name,
                imgUrl: reader.result
            });

            reader.readAsDataURL(img);
        });
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
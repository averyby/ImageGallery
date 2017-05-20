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

    render() {
        const { playing, demo } = this.props;

        return (
            <div class={styles.controlSection}>
                { !demo ? <ImageInput /> : null}
                <div class={styles.buttonArea}>
                    <Button onClick={this.handleButtonClick}>
                        {playing ? '暂停' : '播放'}
                    </Button>
                </div>
            </div>
        );
    }
}
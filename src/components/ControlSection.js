import React, { Component } from 'react';
import Button from './UIComponents/Button';
import styles from '../styles/ControlSection.scss';

export default class ControlSection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div class={styles.controlSection}>
                <div class={styles.buttonArea}>
                    <Button onClick={this.handleButtonClick}>
                        {this.state.playing ? '暂停' : '播放'}
                    </Button>
                </div>
            </div>
        );
    }
}
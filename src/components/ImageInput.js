import React, { Component } from 'react';
import FileInput from './UIComponents/FileInput';

export default class ImageInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelText: '添加图片',
            disabled: false
        };
    }

    onChange = (files) => {
        
    };

    render() {
        const { disabled, labelText } = this.state;

        return (
            <FileInput disabled={disabled} 
                    labelText={labelText}
                    onChange={this.onChange} />
        );
    }
}
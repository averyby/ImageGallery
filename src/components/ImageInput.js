import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExistingImages } from '../index';
import FileInput from './UIComponents/FileInput';

class ImageInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelText: '添加图片',
            disabled: false
        };
    }

    onChange = (files) => {
        const isImage = (file) => /^image\//.test(file.type);
        const alreadyExisted = (image) => 
                this.props.existingImages.indexOf(image) > -1;

        // The parameter files is an array-like object
        files = Array.from(files).filter(
            (file) => !!( isImage(file) && !alreadyExisted(file) )
        );
        this.setState({
            labelText: `添加了 ${files.length} 张图片`
        });
        this.props.onImagesReceive(files);
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

const mapStateToProps = (state, ownProps) => ({
    existingImages: getExistingImages(state, ownProps.index)
});

ImageInput = connect(mapStateToProps, null)(ImageInput);
export default ImageInput;
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

    showNumberOfImagesAdded = (n) => {
        this.setState({
            labelText: `添加了 ${n} 张图片`,
            disabled: true
        });
        setTimeout(() => {
            this.setState({
                labelText: '继续添加图片',
                disabled: false
            })
        }, 3000);
    };

    onChange = (files) => {
        const isImage = (file) => /^image\//.test(file.type);
        const { existingImages } = this.props;
        const alreadyExisted = (image) => {
            const { existingImages } = this.props;
            return existingImages.some((obj, idx) => obj.name === image.name);
        };

        // The parameter files is an array-like object
        files = Array.from(files).filter(
            (file) => !!( isImage(file) && !alreadyExisted(file) )
        );
        this.showNumberOfImagesAdded(files.length);
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
    existingImages: getExistingImages(state, ownProps)
});

export default connect(mapStateToProps, null)(ImageInput);
 
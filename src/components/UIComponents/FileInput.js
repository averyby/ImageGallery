import React, { Component } from 'react';
import styles from './FileInput.scss';

export default class FileInput extends Component {
    handleLabelClick(e) {
        e.preventDefault();
        this.fileInput.click();
    }
    
    handleFileChange = (e) => {
        const selectedFiles = this.fileInput.files;

        // No files are selected, do nothing.
        if (!(selectedFiles && selectedFiles.length)) return;
        this.props.onChange(selectedFiles); // Delegate to the parent comp.
    };

    render() {
        const { disabled, labelText } = this.props;

        return (
            <div class={styles.inputContainer}>
                <input type="file"
                    name="file"
                    class={styles.fileinput}
                    multiple
                    disabled={disabled}
                    ref={(input) => {this.fileInput = input}}
                    onChange={this.handleFileChange} />
                <label htmlFor="file" 
                       onClick={(e) => this.handleLabelClick(e)} 
                       style={this.props.style}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                        <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                    </svg>
                    <span class={`labelText ${disabled ? 'disappear' : 'appear'}`}>{labelText}</span>
                </label>
            </div>
        );
    }
}
import React, { Component } from 'react';
import styles from '../styles/ImageGallery.scss';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class ImageGallery extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setInterval(() => {
            this.props.changeImage();
        }, 3000);
    }
    render() {
        return (
            <div class={styles.imageContainer}>
                <CSSTransitionGroup
                    transitionName='gallery'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    <img src={this.props.currentImage} 
                        class={styles.image}
                        alt="scenery image"
                        key={this.props.currentImage} />
                    
                </CSSTransitionGroup>
            </div>
        );
    }
}
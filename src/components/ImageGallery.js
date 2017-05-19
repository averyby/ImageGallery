import React, { Component } from 'react';
import styles from '../styles/ImageGallery.scss';
import $ from 'jquery';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.containerMinHeight = 0;
    }

    startPlaying = () => {
        let { changeImage, ...rest } = this.props;
        this.timer = setInterval(() => {
                        changeImage(rest);
                    }, 4000);
    };

    stopPlaying = () => {
        clearInterval(this.timer);
    };

    componentDidMount() {
        let { playing } = this.props;

        if (playing) this.startPlaying();    
    }

    componentWillUnmount() {
        if (this.timer) clearInterval(this.timer);
    }

    componentDidUpdate() {
        let imageHeight = $(this.img).height();

        if (imageHeight <= this.containerMinHeight) return;
        this.setContainerMinHeight(imageHeight);
    }

    setContainerMinHeight(height) {
        $(this.container).css('min-height', height);
        this.containerMinHeight = height;
    }

    render() {
        return (
            <div class={styles.imageContainer}
                 ref={c => this.container = c}>
                <CSSTransitionGroup
                    transitionName='gallery'
                    transitionEnterTimeout={2000}
                    transitionLeaveTimeout={2000}>
                    <img src={this.props.currentImage} 
                        class={styles.image}
                        alt="scenery image"
                        key={this.props.currentImage}
                        ref={img => this.img = img} />
                    
                </CSSTransitionGroup>
            </div>
        );
    }
}
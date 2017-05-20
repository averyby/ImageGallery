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
        if (this.timer) clearInterval(this.timer);
    };

    componentDidMount() {
        let { playing } = this.props;

        if (playing) this.startPlaying();    
    }

    componentWillUnmount() {
        if (this.timer) clearInterval(this.timer);
    }

    componentDidUpdate(prevProps) {
        let { playing } = this.props;
        let { playing: prevPlaying } = prevProps;

       /* 
        *  Only when previous status is different from 
        *  the current playing status should we start/stop playing.
        */
        if (prevPlaying && !playing) this.stopPlaying();
        if (!prevPlaying && playing) this.startPlaying();
        this.tryToAdjustContainerHeight();
    }

    tryToAdjustContainerHeight() {
        let { playing } = this.props;

        // When not playing, galleries' heights are static
        if (!playing) return; 

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
                        key={this.props.currentImage}
                        ref={img => this.img = img} />
                    
                </CSSTransitionGroup>
            </div>
        );
    }
}
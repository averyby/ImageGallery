import React from 'react';
import styles from './Button.scss';

export default class extends React.Component {
    render() {
        return (
            <a href="#" class={styles.myButton} onClick={(e) => {
                e.preventDefault();
                if (this.props.onClick) {
                    this.props.onClick();
                }
            }}>
                {this.props.children}
            </a>
        );
    }
}
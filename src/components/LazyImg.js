import React, { Component } from 'react';

// import LazyLoad from 'react-lazy-load';

export default class LazyImg extends Component {

    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }

    componentDidMount() {
        this.imgRef = this.refs['imgRef'];
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const { intersectionRatio, target } = entry;

                if (intersectionRatio <= 0) return;
                target.src = target.dataset.src;
            });
        });
        io.observe(this.imgRef);
        this.imgRef.onload = () => {
            this.setState({ loaded: true });
        }
        this.io = io;
    }

    componentWillUnmount() {
        this.io.unobserve(this.imgRef);
        this.imgRef.onload = null;
    }


    render() {
        const props = this.props;
        return (
            <img data-src={props.src} {...props} src={null} ref="imgRef"></img> 
        );
    }
}
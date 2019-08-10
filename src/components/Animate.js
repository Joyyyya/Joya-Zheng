import React, { Component } from 'react'
// import cls from 'classnames';
import PropTypes from 'prop-types';


export default class Animate extends Component {

    static defaultProps = {
        animClassName: 'move-anim',
        triggerSelectors: []
    }

    static propTypes = {
        animClassName: PropTypes.string,
        triggerSelectors: PropTypes.array
    }

    componentDidMount() {
        const { triggerSelectors, animClassName } = this.props;

        this.io = new IntersectionObserver(entries => {
            const { intersectionRatio, target } = entries[0];
            if (intersectionRatio <= 0) return;
            
            if (Array.from(target.classList).includes(animClassName)) return; 
            target.classList.add(animClassName);
        });

        this.nodes = triggerSelectors.map(selector => document.querySelector(selector));

        this.nodes.forEach(item => this.io.observe(item));
    }

    componentWillUnmount() {
        this.nodes.forEach(item => this.io.unobserve(item));
    }
    
    render() {
        return <div />
    }
}
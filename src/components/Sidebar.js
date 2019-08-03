import React, { useState, useEffect, useMemo } from 'react'
import cls from 'classnames';
import PropTypes from 'prop-types';

import './Sidebar.css';

function getHashName() {
    return window.location.hash.replace(/^#|(\?.*)/g, '');
}

export default function Sidebar(props) {
    const { anchors } = props;
    /**
    * hooks
    */
    const [activeId, setActiveId] = useState(() => {
        const hash = getHashName();
        return hash ? hash : anchors[0].id;
    });

    useEffect(() => {

        // 处理普通的监听
        const io = new IntersectionObserver(entries => {
            const { intersectionRatio, target } = entries[0];
            if (intersectionRatio <= 0) return;
            setActiveId(() => target.id);
        });
        const elements = anchors.map(anchor => document.getElementById(anchor.id)).filter(element => element);
        elements.forEach(item => io.observe(item));

        // 处理顶部监听
        document.addEventListener('scroll', hanldeTop);

        // cleaner
        return () => {
            elements.forEach(item => io.unobserve(item));
            document.removeEventListener('scroll', hanldeTop)
        }
    }, []);

    function handleClick(key) {
        return () => setActiveId(key);
    }

    function hanldeTop() {
        if (document.scrollingElement.scrollTop <= 100) {
            setActiveId(anchors[0].id);
        }
    }


    return (
        <div className="sidebar">
        {
          anchors.map(anchor => {
            const { id, label } = anchor;
            const className = cls({ 'anchor-active': activeId.startsWith(id) }, 'sidebar-link');
            return label && <a href={`#${id}`} key={id} className={className} onClick={handleClick(id)}>{label}</a>
          })
        }
      </div>
    );
}

Sidebar.defaultProps = {
    anchors: []
}
Sidebar.propTypes = {
    anchors: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string
    }))
}

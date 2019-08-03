import React,{ useLayoutEffect, useCallback, useState, useRef, useEffect } from 'react';
// import LazyLoad from 'react-lazy-load';

export default function LazyImg(props) {

    // const { height, width, src, ...resetProps } = props;

    const imgRef = useRef();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const { intersectionRatio, target } = entry;

                if (intersectionRatio <= 0) return;
                target.src = target.dataset.src;
            });
        });
        io.observe(imgRef.current);
        imgRef.current.onload = () => {
            setLoaded(true);
        }

        return () => {
            io.unobserve(imgRef.current);
            imgRef.current.onload = null;
        } 
    }, []);

    return (
        <React.Fragment>
            {/* {loaded && <Spin size="large"/>} */}
            <img data-src={props.src} {...props} src={null} ref={imgRef}></img> 
        </React.Fragment>
    );
}
import React, { Component } from 'react'
import cls from 'classnames';
import PropTypes from 'prop-types';

import './Sidebar.css';

function getHashName() {
    return window.location.hash.replace(/^#|(\?.*)/g, '');
}

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = { activeId: props.anchors[0].id };
    }

    hanldeTop = () => {
        if (document.scrollingElement.scrollTop <= 100) {
            this.setState({ activeId: this.props.anchors[0].id });
        }
    }

    handleClick(key) {
        return () => this.setState({ activeId: key });;
    }

    componentDidMount() {
        // 处理普通的监听
        const io = new IntersectionObserver(entries => {
            const { intersectionRatio, target } = entries[0];
            if (intersectionRatio <= 0) return;
            this.setState({activeId: target.id});
        });
        const elements = this.props.anchors.map(anchor => document.getElementById(anchor.id)).filter(element => element).filter(element => element);
        elements.forEach(item => io.observe(item));
        this.elements = elements;

        // 处理顶部监听
        document.addEventListener('scroll', this.hanldeTop);
        this.io = io;
    }

    componentWillUnmount() {
        this.elements.forEach(item => this.io.unobserve(item));
        document.removeEventListener('scroll', this.hanldeTop)
    }

    render() {
        const { anchors } = this.props;
        const { activeId } = this.state;
        
        return (
            <div className="sidebar">
            {
              anchors.map(anchor => {
                const { id, label } = anchor;
                const className = cls({ 'anchor-active': activeId.startsWith(id) }, 'sidebar-link');
                return label && <a href={`#${id}`} key={id} className={className} onClick={this.handleClick(id)}>{label}</a>
              })
            }
          </div>
        );
    }   
}


// export default function Sidebar(props) {
//     const { anchors } = props;
//     /**
//     * hooks
//     */
//     const [activeId, setActiveId] = useState(() => {
//         const hash = getHashName();
//         return hash ? hash : anchors[0].id;
//     });

//     useEffect(() => {

//         // 处理普通的监听
//         const io = new IntersectionObserver(entries => {
//             const { intersectionRatio, target } = entries[0];
//             if (intersectionRatio <= 0) return;
//             setActiveId(() => target.id);
//         });
//         const elements = anchors.map(anchor => document.getElementById(anchor.id)).filter(element => element);
//         elements.forEach(item => io.observe(item));

//         // 处理顶部监听
//         document.addEventListener('scroll', hanldeTop);

//         // cleaner
//         return () => {
//             elements.forEach(item => io.unobserve(item));
//             document.removeEventListener('scroll', hanldeTop)
//         }
//     }, []);

//     function handleClick(key) {
//         return () => setActiveId(key);
//     }

//     function hanldeTop() {
//         if (document.scrollingElement.scrollTop <= 100) {
//             setActiveId(anchors[0].id);
//         }
//     }


//     return (
//         <div className="sidebar">
//         {
//           anchors.map(anchor => {
//             const { id, label } = anchor;
//             const className = cls({ 'anchor-active': activeId.startsWith(id) }, 'sidebar-link');
//             return label && <a href={`#${id}`} key={id} className={className} onClick={handleClick(id)}>{label}</a>
//           })
//         }
//       </div>
//     );
// }

Sidebar.defaultProps = {
    anchors: []
}
Sidebar.propTypes = {
    anchors: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string
    }))
}

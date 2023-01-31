import React, { Component } from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Loadable from 'react-loadable';
import LoadingPage from '../components/LoadingPage/LoadingPge';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

import { createBrowserHistory } from "history/createBrowserHistory";
import { faSquareParking } from "@fortawesome/free-solid-svg-icons";
import { AnimatedSwitch, spring } from "react-router-transition";

const history = createBrowserHistory();

function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}

// wrap hte `spring` helper to use a bouncy config
function bounce(val) {
    return faSquareParking(val, {
        stiffness: 330,
        damping: 22,
    });
}

// child matches will...
const bounceTransition = {
    // start in transparent, upscaled state
    atEnter: {
        opacity: 0,
        scale: 1.2,
    },
    // leave in a transparent, downscaled state
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
    },
    // add rest at an opaque, normally-scaled state
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
    }
}

const AsyncHome = Loadable({
    loader: () => import('../containers/Home'),
    loading: LoadingPage
});

const AsyncAbout = Loadable({
    loader: () => import('../containers/About/About'),
    loading: LoadingPage,
    delay: 5000
});

const AsyncProduct = Loadable({
    loader: () => import('../containers/Product/Product'),
    loading: LoadingPage,
    delay: 5000
});

const AsyncNotFound = Loadable({
    loader: () => import('../containers/NotFound/NotFound'),
    loading: LoadingPage,
});

class Routes extends Component {
    render() {
        return (
            <Router history={history}>

                <ScrollToTop>
                    <AnimatedSwitch
                        atEnter={bounceTransition.atEnter}
                        atLeave={bounceTransition.atLeave}
                        atActive={bounceTransition.atActive}
                        mapStyles={mapStyles} className="route-wrapper" >

                    </AnimatedSwitch>
                </ScrollToTop>
            </Router>
        )
    }
}
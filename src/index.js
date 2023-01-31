import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import configureStore from './store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "./App";

import * as serviceWorker from './services/serviceWorker';

import './styles/scss/app.scss';

const store = configureStore();

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
        <Provider store={store}>
            <App />
        </Provider>
);
// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>, document.getElementById("root"));

/**
 * <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
 */

// // reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme ,responsiveFontSizes  } from "@material-ui/core/styles";
import { grey, yellow } from "@material-ui/core/colors";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from './components/reducer/reducer'
import thunk from 'redux-thunk';



let store = createStore(reducer , applyMiddleware(thunk))

let theme = createMuiTheme({
    palette: {
        primary: {
            main: yellow[500],
            dark : grey[200]
        },
        secondary: {
            main: grey[200]
        },
    }
});
theme = responsiveFontSizes(theme)
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

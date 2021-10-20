import React from 'react';
import { render } from "react-dom";
import App from './App';
import './styles/global.css'

const wrapper = document.createElement("div");
document.body.appendChild(wrapper)

render(<App />, wrapper)
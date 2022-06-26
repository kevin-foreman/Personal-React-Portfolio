import React from 'react'
import App from './App'
import './index.css'

import reactDom from 'react-dom'
//import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App tab="home" />);

reactDom.render(<App/>, document.querySelector("#root"))


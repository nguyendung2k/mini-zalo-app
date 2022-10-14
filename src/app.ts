// Import React and ReactDOM
import React from 'react'
import { createRoot } from 'react-dom/client'

// Import ZMP
import ZMP from 'zmp-framework/core/lite-bundle'

// Import ZMP-React Plugin
import ZMPReact from 'zmp-framework/react'

// Import ZMP Styles
import 'zmp-framework/zmp-bundle.min.css'

// Import Icons and App Custom Styles
import './css/icons.css'
import './css/app.scss'

// Import App Component
import App from './components/app'
import appConfig from '../app-config.json'

if (!(window as any).APP_CONFIG) {
    ;(window as any).APP_CONFIG = appConfig
}

// Init ZMP React Plugin
ZMP.use(ZMPReact)

// Mount React App
const root = createRoot(document.getElementById('app')!)
root.render(React.createElement(App))

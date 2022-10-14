import React from 'react'
import { App, Icon, Link, Tabbar, TabView, View } from 'zmp-framework/react'
import { RecoilRoot } from 'recoil'
import NavigationBottomBar from './NavigationBottomBar'
import store from '../store'

const MyApp = () => {
    // ZMP Parameters
    const zmpparams = {
        name: 'Mini Shop v2', // App name
        theme: 'auto',
        store, // Automatic theme detection
    }

    return (
        <RecoilRoot>
            <App {...zmpparams}>
                <NavigationBottomBar />{' '}
                {/* Your main view, should have "view-main" class */}
            </App>
        </RecoilRoot>
    )
}
export default MyApp

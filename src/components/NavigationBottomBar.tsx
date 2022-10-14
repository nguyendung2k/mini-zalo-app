import React from 'react'
import { Icon, Link, Tabbar, TabView, View } from 'zmp-framework/react'

const NavigationBottomBar = () => {
    const NavigationBar = () => (
        <Tabbar id="main-nav" bottom>
            <Link tabLink="#view-main" tabLinkActive>
                <Icon zmp="zi-home" />
                Home
            </Link>
            <Link tabLink="#view-discount">
                <Icon zmp="zi-star" />
                Ưu đãi
            </Link>
            <Link tabLink="#view-history">
                <Icon zmp="zi-memory" />
                Lịch sử
            </Link>
        </Tabbar>
    )
    return (
        <TabView className="safe-areas">
            <View
                id="view-main"
                main
                tabActive
                tab
                url="/"
                initRouterOnTabShow
            ></View>
            <View
                id="view-discount"
                name="discount"
                tab
                url="/discount/"
                initRouterOnTabShow
            ></View>
            <View
                id="view-history"
                name="history"
                tab
                url="/history/"
                initRouterOnTabShow
            ></View>
            <View
                id="view-product"
                name="product"
                tab
                url="/product/"
                initRouterOnTabShow
            ></View>
            <View
                id="view-product-modal"
                name="product-modal"
                tab
                // url="/product/"
                initRouterOnTabShow
            ></View>
            <NavigationBar />
        </TabView>
    )
}

export default NavigationBottomBar

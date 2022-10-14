import React, { useState } from 'react'
import { Page, zmp } from 'zmp-framework/react'
import store from '../store'
import Banner from '../components/Banner'
import Heading from '../components/Heading'
import Inquiry from '../components/Inquiry'
import ProductList from '../components/ProductList'
import ProductOrderModal from '../components/ProductOrderModal'

const HomePage = () => {
    // const [showModalOrder, setShowModalOrder] = useState(false)

    return (
        <Page name="home" navbarLarge>
            {/* Top Navbar */}
            <Heading />
            {/* Page content */}
            <Banner />
            <Inquiry />
            <ProductList
                onClick={() =>
                    store.dispatch('showModalOrder', { payload: true })
                }
            />
            <ProductOrderModal />
        </Page>
    )
}

export default HomePage

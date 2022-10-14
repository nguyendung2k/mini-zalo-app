import React, { useRef } from 'react'
import { Page, Sheet, Text, useStore } from 'zmp-framework/react'
import store from '../store'

const ProductOrderModal = () => {
    const showModalOrder = useStore('showModalOrder')
    return (
        <Sheet
            swipeToClose
            onSheetClose={() =>
                store.dispatch('hideModalOrder', { payload: false })
            }
            opened={showModalOrder}
            backdrop
            closeButton
            title="Chọn thức uống"
            className="demo-custom-sheet"
        >
            <Text>Hello</Text>
        </Sheet>
    )
}

export default ProductOrderModal

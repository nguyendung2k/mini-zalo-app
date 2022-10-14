import React from 'react'
import {
    Box,
    Button,
    Icon,
    List,
    ListInput,
    useStore,
    zmp,
} from 'zmp-framework/react'
import store from '../store'
import { productsData } from '../services'

const Inquiry = () => {
    const categoriesData = useStore('categories')
    const handleOnChangeCategory = (e) => {
        e.preventDefault()
        const { category }: any = zmp.form.convertToData('#my-form')
        // console.log('category: ', category)
        const filterProduct = productsData.filter((item) => {
            if (item.id == category) {
                return item.data
            }
        })
        store.dispatch('getProductByCategory', { payload: filterProduct })
    }

    return (
        <Box>
            <div className="input">
                <List
                    form
                    mediaList={true}
                    id="my-form"
                    noHairlines
                    onSubmit={handleOnChangeCategory}
                    style={{ width: '75%' }}
                >
                    <ListInput
                        type="select"
                        placeholder="Select your category"
                        name="category"
                        validate
                    >
                        {categoriesData.map((item) => {
                            return (
                                <option key={item.id} value={item.id}>
                                    {item.category}
                                </option>
                            )
                        })}
                    </ListInput>
                    <div>
                        <Button
                            style={{ width: '20%' }}
                            className="input-icon"
                            type="submit"
                        >
                            <Icon
                                className="input-icon__icon"
                                tooltipTrigger="click"
                                zmp="zi-search"
                            />
                        </Button>
                    </div>
                </List>
            </div>
        </Box>
    )
}

export default Inquiry

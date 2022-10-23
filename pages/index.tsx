import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts'
import { initialData } from '../database/products'
import { ProductList } from '../components/products/ProductList'

const Home: NextPage = () => {
    return (
        <ShopLayout
            title={'Memorabilia - Home'}
            pageDescription={'The best source for memorabilia'}
        >
            <Typography variant="h1" component="h1">
                Shop
            </Typography>
            <Typography variant="h2" sx={{ mb: 1 }}>
                All products
            </Typography>
            {/* TODO: use correct interface */}
            <ProductList products={initialData.products as any} />
        </ShopLayout>
    )
}

export default Home

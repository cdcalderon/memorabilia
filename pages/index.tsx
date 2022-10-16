import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ShopLayout } from '../components/layouts'
import styles from '../styles/Home.module.css'

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
        </ShopLayout>
    )
}

export default Home

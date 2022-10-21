import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ShopLayout } from '../components/layouts'
import styles from '../styles/Home.module.css'
import { initialData } from '../database/products'

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

            <Grid container spacing={4}>
                {initialData.products.map((product) => (
                    <Grid item xs={6} sm={4} key={product.slug}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={`products/${product.images[0]}`}
                                    alt={product.title}
                                ></CardMedia>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <div>Test mock data</div>
            <div>
                {initialData.products.map((p) => (
                    <h3 key={p.slug}>{p.price}</h3>
                ))}
            </div>
        </ShopLayout>
    )
}

export default Home

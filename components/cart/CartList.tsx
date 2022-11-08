import { FC } from 'react'
import NextLink from 'next/link'
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material'

import { initialData } from '../../database/products'
import { ItemCounter } from '../ui'

const productsInCart = [initialData.products[0], initialData.products[1], initialData.products[2]]

interface Props {
    editable?: boolean
}

export const CartList: FC<Props> = ({ editable = false }) => {
    return (
        <>
            <div>CartList</div>
        </>
    )
}

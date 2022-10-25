import NextLink from 'next/link'

import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'
import { ShopLayout } from '../../components/layouts'

const EmptyPage = () => {
    return (
        <ShopLayout
            title="Carrito vació"
            pageDescription="No hay artículos en el carrito de compras"
        ></ShopLayout>
    )
}

export default EmptyPage

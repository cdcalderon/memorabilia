import NextLink from 'next/link'

import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'
import { ShopLayout } from '../../components/layouts'

const EmptyPage = () => {
    return (
        <ShopLayout title="Empty" pageDescription="Empty">
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="calc(100vh - 200px)"
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography>Your shopping cart is empty</Typography>
                    <NextLink href="/" passHref>
                        <Link typography="h4" color="secondary">
                            Back
                        </Link>
                    </NextLink>
                </Box>
            </Box>
        </ShopLayout>
    )
}

export default EmptyPage

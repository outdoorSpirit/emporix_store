import React, { useState }  from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Quantity from '../../components/Utilities/quantity/quantity'
import {CartProductImage
    , CartProductBasicInfo, PriceExcludeVAT} from '../../components/Cart/cart'
import { useDispatch} from 'react-redux'
import {deleteCart} from '../../redux/slices/cartReducer'

import './cart.css'

const CartProductInfo = ({cart}) => {
    return (
        <div className="cart-product-info-wrapper flex gap-6">
            <div className="w-[52px]">
                <CartProductImage className="table-cart-product-image" src={cart.product.src} />
            </div>
            <div>
               <CartProductBasicInfo cart={cart}/> 
            </div>
        </div>
    )
}
const CartTable = ({cartList}) => {
    const dispatch = useDispatch()
    const removeCart = (e, code) => {

        dispatch(deleteCart(code))
      };
    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }}  >
                <TableHead >
                <TableRow className='!py-6'>
                    <TableCell align="left" className='cart-head-item'>Product</TableCell>
                    <TableCell align="center" className='cart-head-item'>Price</TableCell>
                    <TableCell align="left" className='cart-head-item'>Quantity</TableCell>
                    <TableCell align="center" className='cart-head-item'>Subtotal</TableCell>
                    <TableCell align="center" className='cart-head-item'>Discount</TableCell>
                    <TableCell align="center" className='cart-head-item'>VAT</TableCell>
                    <TableCell align="center" className='cart-head-item'>Total Price</TableCell>
                    <TableCell align="center" className='cart-head-item'></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {cartList.map((cart,index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{width:'356px'}}>
                                <CartProductInfo cart={cart}/>
                            </TableCell>
                            <TableCell className='cart-row-item'>
                                <PriceExcludeVAT price={cart.product.price.effectiveValue}/>
                            </TableCell>
                            <TableCell align="center">
                                <div className="quantity-wrapper"><Quantity value={cart.quantity}/></div>
                            </TableCell>
                            
                            <TableCell className='cart-row-item'>
                                <PriceExcludeVAT price={Math.trunc(cart.product.price.originalValue * cart.quantity * 100 ) / 100}/>
                            </TableCell>
                            
                            <TableCell className='cart-row-item'>
                                <PriceExcludeVAT price={0}/>
                            </TableCell>

                            <TableCell className='cart-row-item'>
                                <PriceExcludeVAT price={Math.trunc(cart.product.price.originalValue * 0.2 * 100) / 100} caption='20%'/>
                            </TableCell>

                            <TableCell className='cart-row-item'>
                                <PriceExcludeVAT price={Math.trunc(cart.product.price.originalValue * cart.quantity * 1.2 * 100) / 100} caption='incl. VAT'/>
                            </TableCell>

                            <TableCell className='cart-row-item'>
                                <span onClick={(e) => removeCart(e,cart.id)} className="underline underline-offset-4 cursor-pointer">X</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CartTable
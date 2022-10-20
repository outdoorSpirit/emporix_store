import React from 'react'
import AccountLayout from './AccountLayout'
import {GridLayout, Item} from '../../components/Utilities/common'
import CartTable from '../cart/CartTable'
import CartMobileContent from '../cart/CartMobileContent'
import {MediumPrimaryButton} from '../../components/Utilities/button'
import {Link} from 'react-router-dom'
import {DropdownWithLabel} from '../../components/Utilities/dropdown'
import {TextInput} from '../../components/Utilities/input'
import {frequencyOptions} from './config'
import {my_account_replenishment_orders_url} from '../../services/service.config'

const ReplenishmentAddOrders = () => {
    const product = [
        {
            "id": 1,
            "stock": "Low",
            "rating": 4,
            "count": 8,
            "product_count": 1,
            "src": "/img/products/chair1.png",
            "category": "ICA-CT 073BK",
            "name": "Jysk Office Chair SKODSBORG",
            "price": "93.50",
            "list_price": "109.99",
            "sku": "CF085A",
            "estimated_delivery": "23.05.2022",
            "sub_images": [
            "/img/products/hp_printer_sub1.png",
            "/img/products/hp_printer_sub2.png",
            "/img/products/hp_printer_sub3.png"
            ],
            "buy_count": 1
        }
    ]
    
    return (
        <GridLayout className="mt-12 gap-12">
            <div className="pb-6 border-b border-[#D2D2D2]">
                <div className="lg:block hidden">
                    <CartTable products={product}/>
                </div>

                <div className="lg:hidden">
                    <CartMobileContent products={product}/>
                </div>
            </div>
            <GridLayout className="gap-10">
                <div className="gap-6 lg:flex grid grid-cols-1">
                    <Item className="lg:w-1/4 w-full">
                        <TextInput label="PO Number" placeholder="Placeholder" value=""/>
                    </Item> 
                    <Item className="lg:w-1/4 w-full">
                        <DropdownWithLabel label="Frequency" placeholder="Weekly" options={frequencyOptions}/>
                    </Item>    
                    
                    <Item className="lg:w-1/4 w-full">
                        <DropdownWithLabel label="Delivery Day" placeholder="First working day" options={[{value:'First working day', label:'First working day'}]}/>
                    </Item>   

                </div>
                <div className="w-60 p-2">
                    <Link to={my_account_replenishment_orders_url}>
                        <MediumPrimaryButton title="SAVE ORDER"/>
                    </Link>
                </div>
                    
            </GridLayout>
        </GridLayout>
    )
};

const AccountReplenishmentAddOrders = () => {
    return (
        <AccountLayout  page="New Replenishment Orders"> <ReplenishmentAddOrders /></AccountLayout>
    )
}
export default AccountReplenishmentAddOrders
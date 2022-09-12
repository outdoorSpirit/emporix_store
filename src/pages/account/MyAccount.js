import React, { useState }  from 'react'
import { Link, Outlet, useParams} from 'react-router-dom'
import AccountLayout from './AccountLayout'
import photo from '../../assets/photo.png'
import {MyOrders} from './common'
import {SavedCarts} from './common'

const AccountPersonalInfo = () => {
    return (
        <div className="account-personal-info-wrapper">
            <div className="account-personal-info-caption border-bottom-gray">
                <div className="account-personal-info flex">
                    <div className="my-auto  flex w-full justify-between items-center">
                        <span className="inline-block align-middle account-personal-caption">Personal Details</span>
                        <span className="inline-block align-middle account-edit-btn">Edit Profile&nbsp;&nbsp;<span className="profile-edit-btn-arrow">&gt;</span></span>
                    </div>
                </div>  
            </div>
            <div className="account-profile">
                <div className="mx-auto flex flex-col gap-8 items-center">
                    <img className="personal-photo" src={photo}/>
                    <div className="profile-info flex gap-4">
                       <div className="profile-items gap-2 flex flex-col justify-items-end">
                            <p>Name</p>
                            <p>Company</p>
                            <p>Phone</p>
                            <p>Email</p>
                        </div>
                        <div className="profile-items-info gap-2 flex flex-col justify-items-start">
                            <p className="font-bold">Jack White</p>
                            <p>Medit Gbmh</p>
                            <p>+49 30 901820</p>
                            <p>jack.white@medit.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const PaymentProgressBar = () => {
    return (
        <div className="w-full h-6 bg-[#E7E9EB] rounded-2xl dark:bg-[#E7E9EB]">
            <div className="h-6 bg-[#FBB13C] rounded-2xl dark:bg-[#FBB13C]" style={{width: '45%'}}></div>
        </div>
    )
}
const PaymentStatus = () => {
    return (
        <ul className="flex flex-col gap-4">
            <li className="payment-title">Total spent in April</li>
            <li className="spent-amount">€ 2,540.28</li>
            <li className="limit-bar-wrapper flex flex-col gap-2">
                <div className="limit-bar">
                    <PaymentProgressBar />
                </div>
                <div className="limit-status-text text-right">
                    Your monthly limit: € 10,000.00
                </div>
            </li>
        </ul>
    )
}

const PaymentInfoDetails = () => {
    return (
        <div className="flex">
            <div className="oustanding flex gap-4 flex-col">
                <div className="payment-title">Oustanding</div>
                <div className="price">€ 1912.21</div>
                
            </div>
            <div className="refunds flex gap-4 flex-col">
                <div className="payment-title">Refunds</div>
                <div className="price">€ 841.96</div>
                
            </div>
        </div>
    )
}
const AccountSummary = () => {
    return (
        <div className="account-summary-wrapper flex flex-col gap-6">
            <div className="account-summary-caption border-bottom-gray">
                <div className="account-summary-info flex">
                    <div className="my-auto  flex w-full justify-between items-center">
                        <span className="inline-block align-middle account-summary-title">Summary</span>
                    </div>
                    
                </div>
                    
            </div>
            <PaymentStatus />
            <PaymentInfoDetails />
        </div>
    )
}

const PortalCaptionBar = ({title,action_title}) => {
  return (
    <div className="portal-caption border-bottom-gray mb-6" key={title}>
      <div className="portal-caption-content flex">
          <div className="my-auto  flex w-full justify-between items-center">
              <span className="inline-block align-middle portal-title">{title}</span>
              <span className="inline-block align-middle portal-action-btn">{action_title}&nbsp;&nbsp;<span className="profile-edit-btn-arrow">&gt;</span></span>
          </div>
      </div>  
    </div>
  )
}
const RecentOrders = () => {
  const actions = [{'title':'View'}]
  return (
    <div className="account-recent-orders-wrapper portal-wrapper">
      <PortalCaptionBar title="Recent Orders" action_title="View All"/>
      <MyOrders actions={actions}/>
    </div>
  )
}

const RecentSavedCarts = () => {
const actions = [{'title':'View'}]
  return (
    <div className="account-saved-carts-wrapper portal-wrapper">
      <PortalCaptionBar title="Saved Carts" action_title="View All"/>
      <SavedCarts actions={actions}/>
    </div>
  )
}

const AccountPersonalDetailsAndSummary = () => {
    return (
        <div className="personal-and-summary-content-wrapper border-bottom-gray">
            <div className="personal-and-summary-content md:flex">
                <AccountPersonalInfo />
                <AccountSummary />
            </div>  
        </div>
    )
}
export const MyAccountContent = () => {
  return (
    <>
      <AccountPersonalDetailsAndSummary />
      <div className="mt-12"> 
        <RecentOrders />
      </div>
      <div className="mt-12">
        <RecentSavedCarts />
      </div>
    </>
  )
}
const MyAccount = () => {
    return <AccountLayout pageComponent={<MyAccountContent />} page="My Account"/>;
}

export default MyAccount
  
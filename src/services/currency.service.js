import ApiRequest from './index'
import {accessTokenKey} from 'constants/localstorage'
import {currencyApi} from 'services/service.config'

const CurrencyService = () => {
    const getAllCurrencies = async () => {
        const accessToken = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${accessToken}`,
            "Accept-Language": "*",
            "Content-Type": "application/json"
        }
        const res = await ApiRequest(currencyApi(), 'get', {},headers)
        return res.data
    }
    return {
        getAllCurrencies
    }
}

export default CurrencyService()
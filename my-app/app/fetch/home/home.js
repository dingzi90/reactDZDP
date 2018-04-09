import { get } from '../get'

export function getAdData() {
    const result = get('http://localhost:3123/api/home/Ad')
    return result
}

export function getListData(city, page) {
    const result = get('http://localhost:3123//api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}
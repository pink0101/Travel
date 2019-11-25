let defaultCity = '西安'
try { // 如果 try 中语句发生错误 则执行 catch中语句
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}

export default {
    city: defaultCity
}

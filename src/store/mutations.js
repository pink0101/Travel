export default { // 用来修改数据
    changeCity (state, city) {
        state.city = city
        try {
            localStorage.city = city // h5新特性
        } catch (e) {}
    }
}
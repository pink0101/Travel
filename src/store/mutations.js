export default { // �����޸�����
    changeCity (state, city) {
        state.city = city
        try {
            localStorage.city = city // h5������
        } catch (e) {}
    }
}
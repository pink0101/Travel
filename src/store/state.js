let defaultCity = '����'
try { // ��� try ����䷢������ ��ִ�� catch�����
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}

export default {
    city: defaultCity
}

import axios from "axios";

const useToken = async email => {
    const { data } = await axios.post('https://groceteria-warehouse.herokuapp.com/login', { email });
    localStorage.setItem('accessToken', data.accessToken);

    return [data.accessToken]
};

export default useToken;
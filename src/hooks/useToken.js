import axios from "axios";

const useToken = async email => {
    const { data } = await axios.post('http://localhost:5000/login', { email });
    localStorage.setItem('accessToken', data.accessToken);

    return [data.accessToken]
};

export default useToken;
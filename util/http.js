import axios from 'axios';

const BACKEND_URL = 'https://react-native-course-88130-default-rtdb.firebaseio.com/';

export function postDoktorlar(denemeinput) {
    axios.post(
        BACKEND_URL + '/doktorlar.json',
        denemeinput
    );
}

export async function fetchDoktorlar() {
    const response = await axios.get(
        BACKEND_URL + '/doktorlar.json'
    );

    const doktorlar = [];

    console.log(response.data);
    
    for (const key in response.data) {
        const doktorlarObj = {
            id: key,
            name: response.data[key].name,
            hospital: response.data[key].hospital,
            address: response.data[key].address,
        };
        doktorlar.push(doktorlarObj);
    }

    return doktorlar;
}
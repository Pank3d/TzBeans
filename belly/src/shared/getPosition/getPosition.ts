import axios from 'axios';

// Убедитесь, что ваш API-ключ безопасен, не размещайте его в публичном коде
const apiKey = '1eb31582-941a-3ac8-a61f-041c344495ab';

// Базовый URL для запроса
const baseUrl = 'https://api.rasp.yandex.net/v3.0/nearest_settlement/'; // Используйте путь, который вы настроили в прокси

export const success = async (pos: GeolocationPosition): Promise<void> => {
    const crd = pos.coords;
    console.log(crd);
    if (crd.latitude && crd.longitude) {
        try {
            const resp = await axios.get(baseUrl, {
                params: {
                    apiKey,
                    latitude: crd.latitude,
                    longitude: crd.longitude,
                },
            });
            console.log('Response data:', resp.data); // Вывод данных ответа
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

export const error = (err: GeolocationPositionError): void => {
    console.log(`ERROR(${err.code}): ${err.message}`);
}

// Определите объект options, если требуется
export const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

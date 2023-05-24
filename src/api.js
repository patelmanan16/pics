import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID Ke7ETzoO5IrmbaCiopYzVIq8DTQZdv6b5CzskyuwTz8',
      },
      params: {
        query: 'cars',
      },
    });

    console.log(response);

    return response;
};

export default searchImages;
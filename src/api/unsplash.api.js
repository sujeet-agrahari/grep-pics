import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID GDyer2kzPKWxnn3M9WMGQP91yUJIsog9VJt-R9IoKmw'
  }
});


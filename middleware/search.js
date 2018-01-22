import axios from 'axios'

export default function ({params, store}) {
  return axios.get(`https://images-api.nasa.gov/search?q=${params.id}&media_type=image`)
    .then(response => {
      store.commit('add', response.data.collection.items)
    })
}

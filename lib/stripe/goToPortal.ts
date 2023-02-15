import axios from 'axios'

export default async function handler() {}

export const goToPortal = async () => {
  const res = await axios
    .post(`/api/stripe/create-portal-link`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err))
  const { url } = res
  if (url) {
    window.location.assign(url)
  } else {
    throw new Error('Error creating checkout session')
  }
}

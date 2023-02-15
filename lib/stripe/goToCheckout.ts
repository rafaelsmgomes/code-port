import axios from 'axios'

export default async function handler() {}

export const goToCheckout = async () => {
  const res = await axios
    .get(`/api/stripe/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err))
  const { redirectUrl } = res
  if (redirectUrl) {
    window.location.assign(redirectUrl)
  } else {
    throw new Error('Error creating checkout session')
  }
}

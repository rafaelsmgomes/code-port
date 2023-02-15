import axios from 'axios'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useState } from 'react'
import { goToCheckout } from '../lib/stripe/goToCheckout'

export default function CheckoutPage() {
  const { data, status } = useSession()
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false)

  const handleCheckout = async () => {
    setIsCheckoutLoading(true)
    try {
      await goToCheckout()
    } catch (err) {
      setIsCheckoutLoading(false)
      console.error({ err })
    }
  }

  return (
    <main css={{ fontSize: 25 }}>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'unauthenticated' && <button onClick={() => signIn()}>Sign In</button>}
      {status === 'authenticated' && <button onClick={() => signOut()}>Sign Out</button>}
      {data && (
        <div>
          <p>{JSON.stringify(data)}</p>
          <p>Add a payment method to start using this service!</p>
          <button
            onClick={() => {
              if (isCheckoutLoading) return

              handleCheckout()
            }}
          >
            {isCheckoutLoading ? 'Loading...' : 'Add Payment Method'}
          </button>
        </div>
      )}
    </main>
  )
}

import { useState } from 'react'
import { goToCheckout } from '../../lib/stripe/goToCheckout'
import { PrimaryBtnLg } from '../UI/Buttons'
import { DisplaySBd, Copy } from '../UI/Typography'
import Image from 'next/image'
import logo from '../../public/images/logo.png'

export type CheckoutProps = {}

const CheckoutCTA = (props: CheckoutProps) => {
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
    <div css={{ gridColumn: '1/-1' }}>
      <div
        css={{
          // boxShadow: `0px 10px 24px 0px ${theme.colors.grey[900]}20`,
          // borderRadius: '0.5rem',
          margin: '9.6rem auto 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          width: '36rem',
          maxWidth: '120rem',
          position: 'relative',
          backgroundColor: 'white',
        }}
      >
        <div css={{ marginBottom: 24 }}>
          <Image src={logo} width={48} height={48} alt="logo" layout="intrinsic" css={{ marginBottom: 24 }} />
        </div>
        <DisplaySBd css={{ marginBottom: 12 }}>Proceed to payment!</DisplaySBd>
        <Copy css={{ marginBottom: 32, textAlign: 'center' }}>
          You're almost done! Please set up your payment method!
        </Copy>

        <PrimaryBtnLg
          disabled={isCheckoutLoading}
          css={{ width: '100%', marginBottom: 24 }}
          onClick={() => handleCheckout()}
        >
          Continue to checkout!
        </PrimaryBtnLg>
      </div>
    </div>
  )
}

export default CheckoutCTA

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { SVGProps, useEffect } from 'react'
import { LinkButton } from '../../components/UI/Buttons'
import FeaturedIcon from '../../components/UI/FeaturedIcon'
import { Copy, DisplaySBd } from '../../components/UI/Typography'
import EmailIcon from '../../public/svgs/mail-01.svg'
import LeftArrow from '../../public/svgs/left-arrow.svg'
let EmailSvg: React.FC<SVGProps<SVGElement>> = EmailIcon
let LeftSvg: React.FC<SVGProps<SVGElement>> = LeftArrow

export default function Page() {
  const session = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session.status === 'authenticated') router.push('/')
  }, [session, router])

  return (
    <div css={{ gridColumn: '1/-1' }}>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          position: 'relative',
          width: '36rem',
          maxWidth: '120rem',
          margin: '9.6rem auto 0',
          backgroundColor: 'white',
        }}
      >
        <FeaturedIcon Icon={EmailSvg} css={{ marginBottom: 24 }} />
        <DisplaySBd css={{ marginBottom: 12 }}>Check your email</DisplaySBd>
        <Copy css={{ marginBottom: 32 }}>We sent a verification link to your email!</Copy>
        <LinkButton
          onClick={() => {
            router.push('/auth/signin')
          }}
        >
          <LeftSvg css={{ marginBottom: 2 }} />
          <span css={{ lineHeight: 1 }}>Back to log in</span>
        </LinkButton>
      </div>
    </div>
  )
}

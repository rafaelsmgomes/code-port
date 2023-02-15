import { useTheme } from '@emotion/react'
import { signIn, useSession } from 'next-auth/react'
import { PrimaryBtnLg, SocialBtn } from '../../components/UI/Buttons'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import logo from '../../public/images/logo.png'
import GoogleIcon from '../../public/images/logos/google.svg'
import { Copy, DisplaySBd } from '../../components/UI/Typography'
import { Input } from '../../components/UI/FormUi'
import { getBaseUrl } from '../../utils/runtime'

export default function SignInPage() {
  const [isAwaitingRedirect, setIsAwaitingRedirect] = useState(false)

  const session = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session.status === 'authenticated') router.push('/')
  }, [session, router])

  const theme = useTheme()

  const schema = z.object({
    email: z.string().email(),
  })
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(schema),
  })

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
        <DisplaySBd css={{ marginBottom: 12 }}>Log in to your account</DisplaySBd>
        <Copy css={{ marginBottom: 32 }}>Welcome! Please enter your details.</Copy>
        <form
          css={{ width: '100%' }}
          onSubmit={handleSubmit(({ email }) => {
            setIsAwaitingRedirect(true)
            signIn('email', { email }).then(() => {
              setIsAwaitingRedirect(false)
            })
          })}
        >
          <Input
            type="text"
            {...register('email', { required: 'Email is required!' })}
            placeholder="Enter your email"
            css={{ width: '100%', marginBottom: 16 }}
          />
          <PrimaryBtnLg
            disabled={isSubmitting || isAwaitingRedirect}
            css={{ width: '100%', marginBottom: 24 }}
            type="submit"
          >
            Continue with email
          </PrimaryBtnLg>
        </form>
        <div
          css={{ display: 'flex', alignItems: 'center', justifyItems: 'center', position: 'relative', width: '100%' }}
        >
          <div
            css={{
              position: 'absolute',
              content: "''",
              width: '100%',
              height: '1px',
              // backgroundColor: 'red',
              backgroundColor: theme.colors.gray[300],
              left: 0,
              top: 8,
            }}
          ></div>
          <p
            css={{
              position: 'relative',
              fontSize: 14,
              lineHeight: 1.5,
              padding: '0 10px',
              color: theme.colors.gray[500],
              backgroundColor: theme.colors.base.white,
              margin: '0 auto',
              marginBottom: 24,
            }}
          >
            OR
          </p>
        </div>

        <SocialBtn
          onClick={() => {
            setIsAwaitingRedirect(true)
            signIn('google').then(() => setIsAwaitingRedirect(false))
          }}
          css={{ width: '100%' }}
        >
          <GoogleIcon css={{ marginRight: '1rem', marginBottom: '.4rem', display: 'inline-block', width: 24 }} />{' '}
          <span>Continue with Google</span>
        </SocialBtn>
      </div>
    </div>
  )
}

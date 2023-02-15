import styled from '@emotion/styled'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import SearchBar from '../search/SearchBar'
import { BtnPrimary } from '../UI/Buttons'
import Image from 'next/image'
import logoImg from '../../public/images/logo.png'
import UserDropdown from './UserDropdown'
import { BaseGrid } from '../UI/Grid'

export type HeaderProps = {}

const Header = (props: HeaderProps) => {
  const { data, status } = useSession()

  return (
    <div className='sticky top-0 z-50 w-full shadow-md bg-slate-900 border-slate-50/[0.1] border-b '>
      <div className='flex items-center max-w-7xl mx-auto h-14'>
        <Link href='/'>
          <a className='no-underline flex items-center mr-[60px] cursor-pointer'>
            <div css={{ marginRight: 6 }}>
              <Image src={logoImg} width={26} height={26} alt='Valuemap Logo' />
            </div>
            <h1 className='mr-4 text-xl font-medium text-Violet'>ValueMap</h1>
          </a>
        </Link>
        <SearchBar />
        <div css={{ marginLeft: 'auto', alignSelf: 'center' }}>
          {status === 'authenticated' ? (
            // TODO-Change for user dropdown menu
            <UserDropdown />
          ) : (
            // <PrimaryBtn onClick={async () => await goToPortal()}>Stripe</PrimaryBtn>
            <Link href={'/auth/signin'} passHref>
              <BtnPrimary>Sign In</BtnPrimary>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header

const LogoTxt = styled.h1(({ theme }) => ({
  marginRight: '4rem',
  fontSize: 20,
  fontWeight: 600,
  color: theme.colors.primary[700],
  cursor: 'pointer',
}))

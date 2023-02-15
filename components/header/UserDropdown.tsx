import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { goToPortal } from '../../lib/stripe/goToPortal'
import { TextSm } from '../UI/Typography'

export type UserDropdownProps = {}

const UserDropdown = (props: UserDropdownProps) => {
  const theme = useTheme()
  const [isDropActive, setIsDropActive] = useState(false)
  useEffect(() => {
    const escapeDropdown = (e: MouseEvent) => {
      if (isDropActive) setIsDropActive(false)
    }
    document.addEventListener('click', escapeDropdown)

    return () => {
      document.removeEventListener('click', escapeDropdown)
    }
  }, [isDropActive])

  return (
    <div className='relative' onClick={(e) => e.stopPropagation()}>
      <div
        className='relative w-10 h-10 rounded-full border-2 border-violet-500 bg-slate-800 cursor-pointer hover:bg-slate-700 hover:border-violet-800'
        onClick={() => setIsDropActive((cur) => !cur)}
      >
        <img
          src='/svgs/user-icon.svg'
          alt='User icon'
          css={{
            display: 'block',
            objectFit: 'contain',
            width: 16,
            height: 16,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        />
      </div>
      {isDropActive && (
        <div
          css={{
            position: 'absolute',
            top: '100%',
            right: 0,
            width: 240,
            border: `1px solid ${theme.colors.gray[200]}`,
            boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
            borderRadius: 8,
            backgroundColor: theme.colors.base.white,
          }}
        >
          <ItemDropdown
            onClick={async () => {
              setIsDropActive(false)
              await goToPortal()
            }}
          >
            <IconDropdown src='/svgs/wallet-02.svg' alt='Settings icon' />
            <TextSm>Manage Billing</TextSm>
          </ItemDropdown>
          <ItemDropdown
            onClick={() => {
              setIsDropActive(false)
              signOut()
            }}
          >
            <IconDropdown src='/svgs/logout-icon.svg' alt='Settings icon' />
            <TextSm>Logout</TextSm>
          </ItemDropdown>
        </div>
      )}
    </div>
  )
}

export default UserDropdown

const ItemDropdown = styled.div(({ theme }) => ({
  display: 'flex',
  width: '100%',
  padding: '10px 16px',
  cursor: 'pointer',
  ':hover': { backgroundColor: theme.colors.gray[200] },
}))

const IconDropdown = styled.img({ objectFit: 'contain', width: 16, height: 16, marginRight: 12 })

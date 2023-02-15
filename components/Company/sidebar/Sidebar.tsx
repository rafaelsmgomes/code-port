import styled from '@emotion/styled'
import { atom, useAtom } from 'jotai'

import HomeIcon from '../../../public/svgs/home-line.svg'
import BarIcon from '../../../public/svgs/bar-chart-square-02.svg'
import LayersIcon from '../../../public/svgs/layers-three-01.svg'
import MicroscopeIcon from '../../../public/svgs/microscope.svg'
import TelescopeIcon from '../../../public/svgs/telescope.svg'
import { ReactNode } from 'react'
import {
  COMPANY_DEEP_LOOK,
  COMPANY_FUNDAMENTALS,
  COMPANY_FUTURE,
  COMPANY_INDICATORS,
  COMPANY_PROFILE_OVERVIEW,
  SidebarState,
} from './constants'

export type SidebarProps = {}

export const sidebarStateAtom = atom<SidebarState>(COMPANY_PROFILE_OVERVIEW)

const Sidebar = (props: SidebarProps) => {
  const [selected] = useAtom(sidebarStateAtom)

  return (
    <SidebarContainer>
      <div css={{ padding: '32px 0 0 ' }}>
        <SidebarItem anchor={COMPANY_PROFILE_OVERVIEW} selected={selected}>
          <HomeIcon />
          <span>Overview</span>
        </SidebarItem>
        <SidebarItem selected={selected} anchor={COMPANY_INDICATORS}>
          <BarIcon />
          <span>Indicators</span>
        </SidebarItem>
        <SidebarItem selected={selected} anchor={COMPANY_FUNDAMENTALS}>
          <LayersIcon />
          <span>Fundamentals</span>
        </SidebarItem>
        <SidebarItem selected={selected} anchor={COMPANY_DEEP_LOOK}>
          <MicroscopeIcon />
          <span>Deep Look</span>
        </SidebarItem>
        <SidebarItem selected={selected} anchor={COMPANY_FUTURE}>
          <TelescopeIcon />
          <span>Stargazing</span>
        </SidebarItem>
      </div>
      <div
        css={(t) => ({
          padding: '20px 16px',
          height: 400,
          backgroundColor: t.colors.primary[50],
          borderRadius: 8,
          color: t.colors.primary[600],
        })}
      >
        Some content
      </div>
    </SidebarContainer>
  )
}

export default Sidebar

export const SidebarItem = ({
  anchor,
  selected,
  className,
  children,
}: {
  anchor: SidebarState
  selected: SidebarState
  className?: string
  children: ReactNode
}) => {
  const isSelected = anchor === selected
  const handleNavigate = (id: string) => {
    const el = document.getElementById(id)
    const headerOffset = 100
    if (!el) return
    const elPos = el?.getBoundingClientRect().top
    const offset = elPos + window.scrollY - headerOffset
    window.scrollTo({ top: offset })
  }
  return (
    <button
      className={className}
      css={(theme) => [
        {
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '20px 1fr',
          gap: 14,
          alignItems: 'center',
          padding: '6px 12px',
          cursor: 'pointer',
          color: isSelected ? theme.colors.primary[700] : theme.colors.gray[700],
          fontWeight: 500,
          fontSize: 14,
          lineHeight: 1,
          marginBottom: 4,
          borderRadius: 8,
          backgroundColor: isSelected ? theme.colors.primary[50] : 'transparent',
          border: 'none',
          width: '100%',
          textAlign: 'left',
          overflow: 'hidden',
          svg: {
            stroke: isSelected ? theme.colors.primary[700] : theme.colors.gray[700],
            objectFit: 'contain',
            // transform: `scale(0.85)`,
            width: 20,
            height: 20,
          },
          ':after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 4,
            height: '100%',
            content: '""',
            borderRadius: 16,
            backgroundColor: isSelected ? theme.colors.primary[700] : 'transparent',
          },

          ':hover': {
            backgroundColor: theme.colors.primary[50],
            // color: theme.colors.primary[200],
            color: theme.colors.primary[700],
            svg: {
              stroke: theme.colors.primary[700],
            },
            // ':after': {
            //   backgroundColor: theme.colors.primary[700],
            // },
          },
        },
      ]}
      onClick={() => handleNavigate(anchor)}
    >
      {children}
    </button>
  )
}

const SidebarContainer = styled.div(({ theme }) => ({
  gridColumn: 'start / sidebar',
  marginRight: -theme.grid.gap,
  position: 'sticky',
  top: theme.headerHeight,
  height: `calc(100vh - ${theme.headerHeight}px)`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 10,
}))

import styled from '@emotion/styled'
import img from '../../public/images/mesh-bg.png'

export const SymbolBg = styled.div(({ theme }) => ({
  position: 'absolute',
  // background: `linear-gradient(120deg, ${theme.colors.primary[400]} 0%, ${theme.colors.primary[600]} 50%, ${theme.colors.purple[800]} 100%)`,
  backgroundImage: 'url(/images/mesh-bg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  objectFit: 'contain',
  width: '100%',
  height: 250,
}))

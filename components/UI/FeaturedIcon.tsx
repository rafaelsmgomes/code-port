import { css, useTheme } from '@emotion/react'
import React, { SVGProps } from 'react'

export type FeaturedIconProps = {
  Icon: React.FC<SVGProps<SVGElement>>
  className?: string
}

const FeaturedIcon = ({ Icon, className }: FeaturedIconProps) => {
  const theme = useTheme()
  const positionCentral = css({
    objectFit: 'contain',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%,-50%)`,
  })
  return (
    <div
      className={className}
      css={{
        position: 'relative',
        backgroundColor: theme.colors.primary[50],
        width: 62,
        height: 62,
        borderRadius: '50%',
      }}
    >
      <div
        css={[
          positionCentral,
          { width: 44, height: 44, borderRadius: '50%', backgroundColor: theme.colors.primary[100] },
        ]}
      >
        <Icon
          css={[
            positionCentral,
            {
              width: 28,
              height: 28,
              stroke: theme.colors.primary[600],
            },
          ]}
        />
      </div>
    </div>
  )
}

export default FeaturedIcon

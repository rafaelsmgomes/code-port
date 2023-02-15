import numeral from 'numeral'
import { useState } from 'react'
import { GetProfileDataQuery } from '../../../graphql/generated/graphql-operations'
import { BtnSmSec } from '../../UI/Buttons'
import { Box } from '../../UI/Grid'
import { ItemHeader, ItemDisplay, ItemStats, Copy } from '../../UI/Typography'

export type CompanyDescriptionProps = {
  companyProfile: GetProfileDataQuery['companyProfile']
}

const CompanyDescription = ({ companyProfile }: CompanyDescriptionProps) => {
  const [isEnlarged, setIsEnlarged] = useState(false)

  return (
    <>
      <Box css={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', columnGap: 16, rowGap: 16 }}>
        <div css={{ gridColumn: '1/-2' }}>
          <ItemHeader css={(t) => ({ marginBottom: 0 })}>Company overview</ItemHeader>
        </div>
        <BtnSmSec
          css={(t) => [
            { justifySelf: 'end', width: 100 },
            isEnlarged && {
              backgroundColor: t.colors.primary[50],
              color: t.colors.primary[600],
              borderColor: t.colors.primary[50],
              ':hover': {
                backgroundColor: t.colors.primary[50],
              },
            },
          ]}
          onClick={() => setIsEnlarged((cur) => !cur)}
        >
          See {isEnlarged ? 'less' : 'more'}
        </BtnSmSec>
        <div>
          <ItemDisplay css={(t) => ({ marginBottom: 4 })}>IPO Date</ItemDisplay>
          <ItemStats>
            {companyProfile.ipoDate.replaceAll('-', '/')} (
            {new Date().getFullYear() - new Date(companyProfile.ipoDate).getFullYear()} years)
          </ItemStats>
        </div>
        <div>
          <ItemDisplay css={(t) => ({ marginBottom: 4 })}>Employees</ItemDisplay>
          <ItemStats>{numeral(companyProfile.fullTimeEmployees).format('0,0')}</ItemStats>
        </div>
        <div>
          <ItemDisplay css={(t) => ({ marginBottom: 4 })}>CEO</ItemDisplay>
          <ItemStats>{companyProfile.ceo}</ItemStats>
        </div>
        <div>
          <ItemDisplay css={(t) => ({ marginBottom: 4 })}>Website</ItemDisplay>
          <a href={companyProfile.website} css={{ textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>
            {companyProfile.website}
          </a>
        </div>
        <div css={{ gridColumn: '1/-1' }}>
          <Elipsis description={companyProfile.description} large={isEnlarged} />
        </div>
      </Box>
    </>
  )
}
const Elipsis = ({ description, large }: { description: string; large: boolean }) => {
  return (
    <Copy
      css={[
        {
          overflow: 'hidden',
          cursor: 'pointer',
          display: '-webkit-box',
          WebkitLineClamp: '2',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical',
          fontWeight: 300,
        },
        large && {
          textOverflow: 'unset',
          WebkitLineClamp: 'none',
          display: 'block',
        },
      ]}
    >
      {description}
    </Copy>
  )
}
export default CompanyDescription

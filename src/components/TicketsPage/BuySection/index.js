import React from "react"
import styled from "styled-components"
import ContentWrapper from "components/ContentWrapper"
import { colors } from "theme"
import BuyButton from "./BuyButton"

const Wrapper = styled.div`
  background-color: ${colors.reddishPink};
  padding-bottom: 33vh;
`

const SContentWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  margin-top: 106px;

  @media screen and (max-width: 767px) {
    flex-direction: column;

    & > * {
      margin-bottom: 60px;
    }

    & > *:last-child {
      margin-bottom: 0;
    }
  }
`

const isValidColumn = col => col.title && col.description && col.url

const BuySection = ({ columns }) => (
  <Wrapper>
    <SContentWrapper>
      {columns.map(col =>
        isValidColumn(col) ? (
          <BuyButton
            key={col.title}
            heading={col.title}
            desc={col.description}
            link={col.url}
          />
        ) : null
      )}
    </SContentWrapper>
  </Wrapper>
)

export default BuySection
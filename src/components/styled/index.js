import styled from 'styled-components'

const Title = styled.h1`
  font-size: 48px;
  text-transformation: underline;
  color:blue;
`

const SubTitle = styled(Title)`
  font-style:italic;
  color: lightgray;
  font-size:30px;
`

export default {
    Title: Title,
    SubTitle: SubTitle
}
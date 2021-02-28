import styled from 'styled-components'
import Navbar from '../../components/Navbar';
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
`

export default function Posts() {
  return (
    <>
      <Navbar />
      <Title>posts</Title>
    </>

  )
}

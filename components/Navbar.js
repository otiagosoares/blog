import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.header`
    font-size: 1em;
    color: ${({ theme }) => theme.colors.primary};
    position: fixed;
    top: 0;
    width: 40px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 3em;
    height: 100vh;
    padding: 1em 3em;
    right: 0;

    nav{
        display: flex;
        flex-direction: column;

    }

  a{
      color: ${({ theme }) => theme.colors.primary};
      line-height: 2em;
      margin-right: 1em;
      text-decoration: none;
      font-size: 20px;
      font-family: 'Anton', sans-serif;
      letter-spacing: 3px;
      margin-bottom: 1em;
      text-shadow: 1px 1px #333
  }
`

export default function Navbar() {
    return (
        <>
            <Header>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/blog">
                        <a>Posts</a>
                    </Link>
                </nav>
            </Header>
        </>
    )
}

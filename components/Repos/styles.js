import styled from "styled-components";
export const Section2 = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3a36ed;
  color: #fff;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lista-repos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .flip-card {
      background-color: transparent;
      width: 300px;
      height: 330px;
      perspective: 1000px;
      margin: 2em 1.5em;
    }

    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }

    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
      border-radius: 8px;
      padding: 1.3em 1em;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .flip-card-front {
      background-color: #fff;
      color: #222;
      background-color: #fff;
    }

    .flip-card-back {
      background-color: #222;
      color: white;
      transform: rotateY(180deg);
      h3 {
        margin-top: 0;
      }
      p {
        font-size: 0.8em;
        color: ${({ theme }) => theme.colors.primary};
      }
      a {
        display: block;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};

        width: 80%;
        text-decoration: none;
        font-family: "Anton";
        letter-spacing: 4px;
        padding: 0.67em;

        transition: 0.5s ease;

        &:hover {
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }

  @media (max-width: 1045px) {
    .lista-repos {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 690px) {
    .lista-repos {
      grid-template-columns: 1fr;
    }
  }
`;

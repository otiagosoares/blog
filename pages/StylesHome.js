import styled from 'styled-components';

export const Title = styled.h1`

  animation: glitch 1s linear infinite;

  @keyframes glitch{
    2%,64%{
      transform: translate(2px,0) skew(0deg);
    }
    4%,60%{
      transform: translate(-2px,0) skew(0deg);
    }
    62%{
      transform: translate(0,0) skew(5deg); 
    }
  }

  &:before,
  &:after{
    content: attr(title);
    position: absolute;
    left: 0;
  }

  &:before{
    animation: glitchTop 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  @keyframes glitchTop{
    2%,64%{
      transform: translate(2px,-2px);
    }
    4%,60%{
      transform: translate(-2px,2px);
    }
    62%{
      transform: translate(13px,-1px) skew(-13deg); 
    }
  }

  &:after{
    animation: glitchBotom 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }

  @keyframes glitchBotom{
    2%,64%{
      transform: translate(-2px,0);
    }
    4%,60%{
      transform: translate(-2px,0);
    }
    62%{
      transform: translate(-22px,5px) skew(21deg); 
    }
  }
`;

export const Section1 = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div.col-1{
    flex:1;
  }
  & > div.col-2{
    flex:2;
  }
  & > div.col{
    padding: 2em 4em;    
    position: relative
  }
  .box-avatar{

    width: 300px;
    height: 300px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 50%;

    img.avatar{
      width: 100%;
    }
  }
  h1.h1-name-name{
    font-size: 4em;
    top: 100px;
    letter-spacing: 11px;
    margin: 0;
    font-family: 'Anton', sans-serif;
  }
  h2.bio{
    margin-top: 0;
  }
  .hi{
    font-size: 3em;
    font-weight: bold;
  }
  .box-social{
    margin: 1em 0;
    a{
      font-size: 2em;
      margin-right: 0.3em;
      display: inline-block;
      color: ${({ theme }) => theme.colors.pimary};
    }
  }
  .ico-arrow-scroll{
        position: absolute;
        width: 100%;
        bottom: 20px;
        color: black;
        /* background: red; */
        font-size: 3em;
        display: flex;
        justify-content: center;
        cursor: pointer;
  }

  .box-skills{
    display: flex;
    justify-content: flex-start;
    svg{
      margin-right: 1em; 
    }
  }

`;

export const Section2 = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;

  h1{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lista-repos{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .flip-card {
      background-color: transparent;
      width: 300px;
      height: 200px;
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

    .flip-card-front, .flip-card-back {
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
      h3{
        margin-top: 0;
      }
      p{
        font-size: 0.8em;
        color: ${({ theme }) => theme.colors.primary}; 
      }
      a{
        display: block;
        border:1px solid ${({ theme }) => theme.colors.primary}; 
        color: ${({ theme }) => theme.colors.primary}; 

        width: 80%;
        text-decoration: none;
        font-family: 'Anton';
        letter-spacing: 4px;
        padding: 0.67em;

        transition: 0.5s ease;

        &:hover{
          background-color: ${({ theme }) => theme.colors.primary}; 
          color: ${({ theme }) => theme.colors.secondary}; 
        }
      }
    }
  }
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  position:relative;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.pimary};
`;

export default Main;
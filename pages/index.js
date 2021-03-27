import React, { useRef, useEffect } from 'react';
import Head from "next/head";
import Navbar from '../components/Navbar';
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import {
  SiMinutemailer,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodeDotJs,
  SiMysql,
  SiCodeigniter,
  SiTypescript,
  SiNextDotJs,
  SiStyledComponents
} from 'react-icons/si';
import { DiPhp } from 'react-icons/di';
import { IoIosArrowDropdown } from 'react-icons/io';

import Main, {
  Title,
  Section1,
  Section2
} from './StylesHome';

export default function Home(props) {
  const serction1Ref = useRef();
  const serction2Ref = useRef();

  const scrollToSection = (target) => {
    window.scroll({
      top: target.current.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B5R7LVZZ92"></script>
        <title>{props.profile.name}</title>

        <script dangerouslySetInnerHTML={
          {
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-B5R7LVZZ92');
          `}
        }>
        </script>
      </Head>

      {/* <Navbar /> */}

      <Main theme={props.theme}>
        <Section1 theme={props.theme} ref={serction1Ref} >

          <div className="col col-1">
            <div className="box-avatar">
              <img className="avatar" src={props.profile.avatar_url} alt="{props.profile.name}" />
            </div>
          </div>
          <div className="col col-2">
            <Title theme={props.theme} className="h1-name-name" title={props.profile.name}>
              {props.profile.name}
            </Title>
            <h2 className="bio">{props.profile.bio}</h2>
            <article>
              <p><span className="hi">Olá! </span> Eu trabalho remotamente desenvolvendo soluções para e-commerce.</p>
              <p>Amo programação e novas tecnologias. Gosto de buscar novos metodos e padrões que facilitem o desenvolvimento de software.
              </p>
              <p>Sou graduado em Produção Multimídia e me especializando <br />
                em Desenvolvimento Ágil de Software pela Universidade Federal do Paraná.
              </p>
            </article>
            <addres> <HiOutlineLocationMarker /> {props.profile.location}</addres>

            <article className="box-social">
              <a href="mailto:oi@tiagosoares.com.br" target="_blank" title="LinkedIn">
                <SiMinutemailer />
              </a>
              <a href="https:/www.linkedin.com/in/otiagosoares" target="_blank" title="LinkedIn">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/otiagosoares" title="Github" target="_blank">
                <AiOutlineGithub />
              </a>
            </article>
            <h4>@otiagosoares</h4>

            <h6>Atualmente trabalho com as seguintes tecnologias:</h6>
            <article className="box-skills">
              <SiJavascript size={35} />
              <SiReact size={35} />
              <SiNextDotJs size={35} />
              <SiStyledComponents size={35} />
              <SiNodeDotJs size={35} />
              <SiTypescript size={35} />
              <SiHtml5 size={35} />
              <SiCss3 size={35} />
              <DiPhp size={35} />
              <SiCodeigniter size={35} />
              <SiMysql size={35} />
            </article>
          </div>
          <div className="ico-arrow-scroll">
            <a onClick={() => scrollToSection(serction2Ref)}>
              <IoIosArrowDropdown />
            </a>
          </div>
        </Section1>
        <Section2 ref={serction2Ref}>
          <h1>Meus Repositórios Github </h1>
          <p>Neles você consgue ver um pouco do que estou estudando e desenvolvendo.</p>
          {console.log(props.repos)}
          {(props.repos.length) ?
            < div className="lista-repos">
              {props.repos.map(repo => (
                <article className="flip-card" key={repo.id}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <AiOutlineGithub size={70} />
                      <h2>{repo.name}</h2>
                    </div>
                    <div className="flip-card-back">
                      <h3>
                        {repo.name}
                      </h3>
                      <p>{repo.description}</p>
                      <p>Linguagem: {repo.language}</p>
                      <a href={repo.html_url} target="_blanck">
                        VER REPOSITÓRIO
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            : ""}

          <p>Esta página foi construída usando vários recursos do <a href="https://nextjs.org/" target="_blank" style={{ color: "#0070f3", fontWeight: "bold" }}>Next.js</a> e todos os dados estão sendo buscados da API do Github</p>

          <CodePre />
        </Section2>
      </Main>
    </>

  )
}

const CodePre = () => {

  const stylesCode = {
    background: "#fff",
    color: "#333",
    borderRadius: "8px",
    padding: "2em",
  };

  return (
    <pre style={stylesCode}>
      <code>
        {`export async function getStaticProps() {
    const profile = await fetch("https://api.github.com/users/otiagosoares")
      .then(result => result.json())

    const repos = await fetch("https://api.github.com/users/otiagosoares/starred")
      .then(result => result.json())

  return {
    props: {
      profile,
      repos,
    }
  }
}`
        }
      </code>
    </pre>
  )
}

export async function getStaticProps() {

  const profile = await fetch("https://api.github.com/users/otiagosoares")
    .then(result => result.json())

  const repos = await fetch("https://api.github.com/users/otiagosoares/starred")
    .then(result => result.json())

  return {
    props: {
      profile,
      repos,
    }
  }
}

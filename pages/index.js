import React, { useRef, useEffect, forwardRef } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Repos from "../components/Repos";

import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { DiPhp } from "react-icons/di";
import { IoIosArrowDropdown } from "react-icons/io";
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
  SiStyledComponents,
} from "react-icons/si";

import Main, { Title, Section1, Section2 } from "./StylesHome";

export default function Home(props) {
  const serction1Ref = useRef();
  const serction2Ref = useRef();

  const scrollToSection = (target) => {
    window.scroll({
      top: target.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B5R7LVZZ92"
        ></script>
        <title>{props.profile.name} - Software Engineer</title>
        <meta name="description" content="Desenvolvimento de software" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-B5R7LVZZ92');
          `,
          }}
        ></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4525170232333356"
     crossorigin="anonymous"></script>
      </Head>

      {/* <Navbar /> */}

      <Main theme={props.theme}>
        <Section1 theme={props.theme} ref={serction1Ref}>
          <div className="col col-1">
            <div className="box-avatar">
              <img
                className="avatar"
                src={props.profile.avatar_url}
                alt="{props.profile.name}"
              />
            </div>
          </div>
          <div className="col col-2">
            <Title
              theme={props.theme}
              className="h1-name-name"
              title={props.profile.name}
            >
              {props.profile.name}
            </Title>
            <h2 className="bio">{props.profile.bio}</h2>
            <article>
              <p>
                <span className="hi">Olá! </span>
              </p>
              <p> Atualmente trabalho remotamente desenvolvendo soluções para o Front End no time do  <a href="https://www.kabum.com.br/" target="_blank">
                  KaBuM!
                </a>.</p>
              <p>
                Amo programação e novas tecnologias. Gosto de buscar novos
                metodos e padrões que facilitem o desenvolvimento de software e
                elevem a qualidades das entregas.
              </p>
              <p>
                Sou graduado em Produção Multimídia e me especializando <br />
                em{" "}
                <a href="https://das.ufpr.br/" target="_blank">
                  Desenvolvimento Ágil de Software pela Universidade Federal do
                  Paraná
                </a>
                .
              </p>
            </article>
            <addres>
              {" "}
              <HiOutlineLocationMarker /> {props.profile.location}
            </addres>

            <article className="box-social">
              <a
                href="https://www.instagram.com/limpa_o_cache/"
                target="_blank"
                title="Instagram"
              >
                <AiOutlineInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/@tgo.exe"
                target="_blank"
                title="LinkedIn"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/otiagosoares"
                title="Github"
                target="_blank"
              >
                <AiOutlineGithub />
              </a>
            </article>

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
              <SiMysql size={35} />
            </article>
          </div>
          <div className="ico-arrow-scroll">
            <a onClick={() => scrollToSection(serction2Ref)}>
              <IoIosArrowDropdown />
            </a>
          </div>
        </Section1>

        <Repos ref={serction2Ref} repos={props.repos} />
      </Main>
    </>
  );
}

export async function getStaticProps() {
  const profile = await fetch("https://api.github.com/users/otiagosoares").then(
    (result) => result.json()
  );

  const repos = await fetch(
    "https://api.github.com/users/otiagosoares/starred"
  ).then((result) => result.json());

  return {
    props: {
      profile,
      repos,
    },
  };
}

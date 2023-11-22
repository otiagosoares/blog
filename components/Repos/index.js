import React, { useRef } from "react";

import { AiOutlineGithub } from "react-icons/ai";
import { Section2 } from "./styles";

const Repos = React.forwardRef((props, ref) => (
  <Section2 ref={ref}>
    <h1>Meus Repositórios no Github </h1>
    <p>
      Neles você consegue ver um pouco do que estou estudando e desenvolvendo.
    </p>

    {props.repos.length ? (
      <div className="lista-repos">
        {props.repos.map((repo) => (
          <article className="flip-card" key={repo.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <AiOutlineGithub size={70} />
                <h2>{repo.name}</h2>
              </div>
              <div className="flip-card-back">
                <h3>{repo.name}</h3>
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
    ) : (
      ""
    )}

    <p>
      Esta página foi construída usando vários recursos do{" "}
      <a
        href="https://nextjs.org/"
        target="_blank"
        style={{ color: "#0070f3", fontWeight: "bold" }}
      >
        Next.js
      </a>{" "}
      e todos os dados estão sendo buscados da API do Github
    </p>
  </Section2>
));

const CodePre = () => {
  const stylesCode = {
    background: "#fff",
    color: "#333",
    borderRadius: "8px",
    padding: "2em",
    width: "100%",
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
}`}
      </code>
    </pre>
  );
};

export default Repos;

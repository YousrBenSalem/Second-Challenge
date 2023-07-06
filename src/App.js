import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import SideMenu from "./components/SideMenu";
function App() {
  const angular = `Angular est un framework pour clients, open source, basé sur TypeScript et codirigé par l'équipe du projet « Angular » chez Google ainsi que par une communauté de particuliers et de sociétés`;
  const react = `React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état.`;
  const symfony = `Symfony est un ensemble de composants PHP ainsi qu'un framework MVC libre écrit en PHP. Il fournit des fonctionnalités modulables et adaptables qui permettent de faciliter et d’accélérer le développement d'un site web.`;
  const express = `Express.js est un framework pour construire des applications web basées sur Node.js. C'est de fait le framework standard pour le développement de serveur en Node.js.`;
  const laravel = `Laravel est un framework web open-source écrit en PHP respectant le principe modèle-vue-contrôleur et entièrement développé en programmation orientée objet. Laravel est distribué sous licence MIT, avec ses sources hébergées sur GitHub`;
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "60%" }}>
            <Post postName="Angular"  postBody={angular} />
            <Post  postName="React Js" postBody={react} />
            <Post postName="Symfony" postBody={symfony} />
            <Post  postName="Express Js" postBody={express} />
            <Post postName="Laravel" postBody={laravel} />
          </div>
          <div style={{ width: "30%" }}>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

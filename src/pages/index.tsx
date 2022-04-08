import { HomeContainer } from '../styles/HomeStyles';

import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import Certificacoes from '../components/Certificacoes';
import Projetos from '../components/Projetos';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Certificacoes />
        <Projetos />
      </main>
    </HomeContainer>
  );
}

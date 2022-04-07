import { HomeContainer } from '../styles/HomeStyles';

import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import Certificacoes from '../components/Certificacoes';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Certificacoes />
      </main>
    </HomeContainer>
  );
}

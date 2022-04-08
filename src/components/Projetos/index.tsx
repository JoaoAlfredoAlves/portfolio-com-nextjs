import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';
import Link from 'next/link';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />

      <section>
        <ProjetoItem 
          img='https://cdn.pixabay.com/photo/2020/05/31/12/41/mountain-5242534_1280.jpg'
          title='Projeto 01'
          type='Website'
          slug='teste'
        />
        <ProjetoItem 
          img='https://cdn.pixabay.com/photo/2020/05/31/12/41/mountain-5242534_1280.jpg'
          title='Projeto 01'
          type='Website'
          slug='teste'
        />
        <ProjetoItem 
          img='https://cdn.pixabay.com/photo/2020/05/31/12/41/mountain-5242534_1280.jpg'
          title='Projeto 01'
          type='Website'
          slug='teste'
        />
      </section>
      <button type='button'>
        <Link href="/projetos">
          <a>Ver Todos os Projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;

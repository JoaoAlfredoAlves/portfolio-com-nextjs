import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

export default function Projetos() {
    return(
        <ProjetosContainer>
            <Header />
            <main className='container'>
                <ProjetoItem 
                    title="Projeto 01"
                    type="Website"
                    slug="Teste"
                    imgUrl="https://img.freepik.com/vetores-premium/wallpaper-de-paisagem-em-design-plano_74890-34.jpg?w=2000"
                />
            </main>
        </ProjetosContainer>
    )
}
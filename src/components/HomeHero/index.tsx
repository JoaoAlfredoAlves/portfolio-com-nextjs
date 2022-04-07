/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/pessoa.png';

function HomeHero() {
    return (
        <Container>
            <img src={picture} alt="Minha Foto" />
            <div>
                <TextContainer>
                    <h1>Olá</h1>
                    <h2>Eu sou o João Alfredo</h2>
                </TextContainer>
                <InfosContainer>
                    <CodeItem>
                        <span className='comment'>// Minha Apresentação</span>
                        <span className='purple'>Infos</span> {'\u007B'}
                        <div>
                            Nome: <span className='blue'>João,</span>
                        </div>
                        <div>
                            Sobrenome: <span className='blue'>Alfredo</span>
                        </div>
                        {'\u007D'}
                    </CodeItem>
                    <CodeItem>
                        <span className='purple'>Cargo</span> {'\u007B'}
                        <div>
                            Função: <span className='blue'>Desenvolvedor Web,</span>
                        </div>
                        <div>
                            Area: <span className='blue'>Front-End</span>
                        </div>
                        {'\u007D'}
                    </CodeItem>
                </InfosContainer>
            </div>
        </Container>
    );
};

export default HomeHero;
import SectionTitle from '../SectionTitle';
import CertificacoesItem from './CertificacoesItem';
import { Container } from './styles';

function Certificacoes() {
    return (
        <Container>
            <SectionTitle title="Certificações" description="E Idiomas" />

            <section>
                <a href="https://drive.google.com/file/d/1_jiuDRgeP6-siGRUmMJqtK7ZhqtQ0t7y/view" target="_blank">
                    <CertificacoesItem 
                        year="2018"
                        title="Fundamentos de T.I - Hardware e Software"
                        description="( Fundação Bradesco )"
                    />
                </a>
                <a href="https://drive.google.com/file/d/1QfYNxdDgsi6ffr3b_QZOvT_1oN-yOlp5/view" target="_blank">
                    <CertificacoesItem 
                        year="2018"
                        title="Microsoft Windows 7"
                        description="( Fundação Bradesco )"
                    />
                </a>
                <a href="https://drive.google.com/file/d/1hjxCIjxoXezffUH0fTk6AxifBOmCEsxb/view" target="_blank">
                    <CertificacoesItem 
                        year="2018"
                        title="Sistemas Operacionais - Conceitos Básicos"
                        description="( Fundação Bradesco )"
                    />
                </a>
                <a href="https://drive.google.com/file/d/1zdMXDUQVR1iHoSLrtgyAWj-xNGFo2QLb/view" target="_blank">
                    <CertificacoesItem 
                        year="2021"
                        title="Introdução a React Native"
                        description="( Sertão Comp II )"
                    />
                </a>
            </section>
            <hr />
            <section>
            <p></p>
                <CertificacoesItem 
                    year="Português"
                    title="Fluente"
                    description="Língua Nativa"
                />
                <CertificacoesItem 
                    year="Inglês"
                    title="Avançado"
                    description="( C1 )"
                />
                <CertificacoesItem 
                    year="Espanhol"
                    title="Básico"
                    description="( A2 )"
                />
            </section>
        </Container>
    );
}

export default Certificacoes;
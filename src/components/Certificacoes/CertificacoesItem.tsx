import { ItemContainer } from './styles';

interface CertificacoesProps {
    year: string;
    title: string;
    description: string;
}

export default function CertificacoesItem({ year, title, description }: CertificacoesProps) {
    return (
        <ItemContainer>
            <div>
                <h1>{year}</h1>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </ItemContainer>
    )
}
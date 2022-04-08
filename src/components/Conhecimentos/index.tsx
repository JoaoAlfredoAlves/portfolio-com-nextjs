import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { DiNodejsSmall, DiGit, DiGithubBadge, DiMarkdown, DiVisualstudio, DiJsBadge, DiPython } from "react-icons/di";
import { SiFigma } from "react-icons/si";
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from "./ConhecimentoItem";
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="HTML 5" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS 3" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Figma" icon={<SiFigma />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="JavaScript" icon={<DiJsBadge />} />
        <ConhecimentoItem title="Node.js" icon={<DiNodejsSmall />} />
        <ConhecimentoItem title="Git" icon={<DiGit />} />
        <ConhecimentoItem title="GitHub" icon={<DiGithubBadge />} />
        <ConhecimentoItem title="Markdown" icon={<DiMarkdown />} />
        <ConhecimentoItem title="Visual Studio Code" icon={<DiVisualstudio />} />
        <ConhecimentoItem title="Python" icon={<DiPython />} />
      </section>
    </Container>
  );
};

export default Conhecimentos;

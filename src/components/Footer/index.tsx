import { AiOutlineTwitter, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
    function handleRedirect(url: string) {
        window.open(url);
    };

    function handleScrollTop(){
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    return(
        <Container>
            <div className='container'>
                <button type='button' onClick={handleScrollTop}>Voltar ao topo</button>
                <section>
                    <AiOutlineTwitter onclick={() => handleRedirect('https://twitter.com')} />
                    <AiOutlineGithub onclick={() => handleRedirect('https://github.com')} />
                    <AiFillLinkedin onclick={() => handleRedirect('https://linkedin.com')} />
                </section>
            </div>
        </Container>
    );
};

export default Footer;
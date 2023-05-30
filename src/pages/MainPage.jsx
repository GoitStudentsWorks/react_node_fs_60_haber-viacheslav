import { Hero } from '../components/Hero/Hero';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { BgWrapper } from './Pages.styled';

const MainPage = () => {
  return (
    <BgWrapper>
      <Section
        padTopSm={'20px'}
        padTopMd={'52px'}
        padTopLg={'10px'}
        // padBottomSM={'405px'}
        // padBottomMd={'845px'}
        // padBottomLg={'400px'}
      >
        <Container>
          <Hero />
        </Container>
      </Section>
    </BgWrapper>
  );
};

export default MainPage;

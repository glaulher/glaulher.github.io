import { HomeHeroPostSection } from '@/src/components/HomeHeroPostSection';
import { WrapperBody } from './WrapperBody';
import { Title } from '../components/Title';

export default function Home() {
  return (
    <>
      <WrapperBody>
        <Title />
        <HomeHeroPostSection />
      </WrapperBody>
    </>
  );
}

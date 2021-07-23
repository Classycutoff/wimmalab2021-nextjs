import BookCard from '/components/BookCard';
import GuideLayout from '/components/GuideLayout';
import { getGuideIntroductions } from '/components/lib/mdx';
import BlackBookImg from '/public/assets/Black-Book-Images/blackbook.png';
import GreenBookImg from '/public/assets/Black-Book-Images/greenbook.png';

const GuidesIndex = (props) => {
  console.log('GuidesIndex  ------------->', props);
  return (
    <GuideLayout>
      <h1>WIMMA Lab Guides</h1>
      <p className="p-bigger margin-b">
        Welcome to WIMMA Lab Guides! Here you can find guides and project documentation for{' '}
        <a href="https://www.wimmalab.org/" target="_blank" rel="noopener noreferrer">
          WIMMA Lab
        </a>
        . By reading through the guides, you can learn more about the concept of WIMMA Lab and how
        it’s implemented in{' '}
        <a href="https://www.jamk.fi/" target="_blank" rel="noopener noreferrer">
          Jyväskylä University of Applied Sciences (JAMK)
        </a>
        . You could even use the guides to implement and build your own project environment based on
        the WIMMA Lab concept!
      </p>

      <h2>All Guides</h2>
      <BookCard title="Black Book 1.2" href="/guides/Black-Book-en" img={BlackBookImg}>
        The blueprint for WIMMA Lab. It explains the concept in detail: how virtual companies
        operate and what kind of practices are utilized, from daily routines to special events.
      </BookCard>
      <BookCard title="Green Book 2021" href="/guides/Green-Book" img={GreenBookImg}>
        Technical guide that dives deep into DevOps. Includes step-by-step instructions on how
        project environments and pipelines are set up and how WIMMA Lab projects are deployed to the
        cloud.
      </BookCard>
    </GuideLayout>
  );
};

export const getStaticProps = async () => {
  const frontmatter = getGuideIntroductions();
  console.log('FRONTMATTER', frontmatter);
  return {
    props: {
      ...frontmatter
    }
  };
};

export default GuidesIndex;

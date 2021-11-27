/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Grid } from 'theme-ui'
import SectionHeader from 'components/section-header'
import FeatureCard from 'components/feature-card.js'
import Performance from 'assets/feature/performance.svg'
import Partnership from 'assets/feature/partnership.png'
import Subscription from 'assets/feature/subscription.svg'
import Support from 'assets/feature/support.svg'

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Balayage',
    title: 'Balayage',
    text:
      "A highlighting technique that doesn't use foils. Instead, your hair will be hand painted with color directly onto your hair, creating a more natural, blended, sun-kissed color.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Hair 2',
    title: 'Hair 2',
    text: 'Filler text regarding whatever it is that needs to be thrown here.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Hair 3',
    title: 'Hair 3',
    text: 'Filler text regarding whatever it is that needs to be thrown here.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Hair 4',
    title: 'Hair 4',
    text: 'Filler text regarding whatever it is that needs to be thrown here.',
  },
]

export default function Feature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }}>
      <Container>
        <SectionHeader
          slogan='Some Hair Stuff IDK'
          title='Hairstylist dude who is cool'
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  )
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
}

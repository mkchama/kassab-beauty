/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Grid, Box, Image } from 'theme-ui'
import TextFeature from 'components/text-feature'
import shapePattern from 'assets/shape-pattern2.png'
import FeatureThumb from 'assets/core-feature.jpg'
import SectionHeader from '../components/section-header'
import FeatureCardColumn from 'components/feature-card-column.js'
import Performance from 'assets/key-feature/performance.svg'
import Partnership from 'assets/key-feature/partnership.svg'
import Experience from 'assets/key-feature/experience.svg'
import Approve from 'assets/key-feature/feedback.svg'
import Jenna from 'assets/work.svg'
import Face from 'assets/key-feature/face.svg'
import Expert from 'assets/key-feature/expert.svg'
import Certificate from 'assets/key-feature/certificate.svg'
import Subscription from 'assets/key-feature/subscription.svg'
import Support from 'assets/key-feature/support.svg'

const data1 = {
  subTitle: 'Jenna Kassab',
  title: 'About Me',
  description:
    "My name is Jenna, I am the founder of Kassab Beauty. My passion for hair began 4 years ago. Over these four years I fell in love with the creation of colors to complement clients complections. Hope to catch you in my DM's soon!",
  btnName: 'Get Started',
  btnURL: '#',
}

const data = [
  {
    id: 1,
    imgSrc: Expert,
    altText: '4+ Years of Experience',
    title: '4+ Years of Experience',
    text:
      'My hair journey started in 2015 in cosmetology at Forest Lawn High School.',
  },
  {
    id: 2,
    imgSrc: Certificate,
    altText: 'Hair License',
    title: 'Hair License ',
    text: 'I am a fully licensed stylist',
  },
  {
    id: 3,
    imgSrc: Face,
    altText: 'Balayage and Blonding Specialist',
    title: 'Balayage and Blonding Specialist',
    text:
      "Over these fours years I have mastered blonding and balayage's on corse, thick, curly hair.",
  },
  {
    id: 4,
    imgSrc: Approve,
    altText: 'Amazing Results and Excellent Reviews',
    title: 'Amazing Results and Excellent Reviews',
    text: 'Scroll down to see photos of the finished product and reviews.',
  },
]

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id='about'>
      {/* <SectionHeader slogan='Jenna Kassab' title='About Me' /> */}

      <Container sx={styles1.containerBox}>
        <Box sx={styles1.contentBox}>
          <TextFeature
            subTitle={data1.subTitle}
            title={data1.title}
            description={data1.description}
            btnName={data1.btnName}
            btnURL={data1.btnURL}
          />
        </Box>
        <Box sx={styles1.thumbnail}>
          <div>
            <Image src={Jenna} alt='Thumbnail' />
            <Box sx={styles1.shapeBox}>
              <Image src={shapePattern} alt='Shape' />
            </Box>
          </div>
        </Box>
      </Container>
      <Container py='7'>
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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

const styles1 = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: 0,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
}

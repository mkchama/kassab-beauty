/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui'
import BannerImg from 'assets/hairStyle.jpg'
import ShapeLeft from 'assets/shape-left.png'
import ShapeRight from 'assets/shape-right.png'
import Bal from 'assets/bal1.jpg'
import Bal2 from 'assets/bal3.jpg'
import Bal3 from 'assets/bal2.jpg'
import Car1 from 'assets/carou1.jpg'
import Car2 from 'assets/carou2.jpg'
import Car3 from 'assets/carou3.jpg'
import ImageGallery from 'react-image-gallery'
import { Link } from 'react-scroll'
import TextFeature from 'components/text-feature'

export default function Banner() {
  return (
    <section sx={styles.banner} id='home'>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as='h1' variant='heroPrimary'>
            Kassab Beauty
          </Heading>
          <Text as='p' variant='heroSecondary'>
            💇‍♀️ Hairstylist | 💆‍♀️ Balayage Specialist | 📍 YYC
          </Text>
          <Link
            activeClass='active'
            spy={true}
            offset={-70}
            duration={500}
            smooth={true}
            to='about'
          >
            <Button variant='primary' aria-label='Explore'>
              Explore
            </Button>
          </Link>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <div>
            <ImageGallery
              slideDuration={650}
              slideInterval={5500}
              showPlayButton={false}
              showBullets={true}
              showNav={false}
              disableKeyDown={true}
              showThumbnails={false}
              autoPlay={true}
              showFullscreenButton={false}
              items={images}
            />
          </div>
        </Box>
      </Container>
    </section>
  )
}

const images = [
  {
    original: Car3,
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

const st = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0],
    },
  },
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
}

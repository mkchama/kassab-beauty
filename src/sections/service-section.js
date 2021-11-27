import React, { useState } from 'react'
/** @jsx jsx */
import {
  jsx,
  Container,
  Box,
  Grid,
  Text,
  Heading,
  Button,
  Image,
} from 'theme-ui'
import { keyframes } from '@emotion/core'
import TextFeature from 'components/text-feature'
import ModalVideo from 'react-modal-video'
import { IoIosPlay } from 'react-icons/io'
import SectionHeader from 'components/section-header'

import ServiceThumb from 'assets/service-thumb.jpg'
import shapePattern from 'assets/shape-pattern1.png'

import Smart from 'assets/services/smart.svg'
import Secure from 'assets/services/secure.svg'
import Performance from 'assets/feature/performance.svg'
import Partnership from 'assets/feature/partnership.png'
import Subscription from 'assets/feature/subscription.svg'
import Balayage from 'assets/curling-iron.svg'
import PremiumProd from 'assets/premium-service.svg'
import HairDry from 'assets/hairdryer.svg'
import HairBot from 'assets/hair-bot.svg'
import HairOmb from 'assets/hair-omb.svg'

import HairSat from 'assets/hair-satis.svg'
import ColorCor from 'assets/color-cor.svg'

import Support from 'assets/feature/support.svg'
import FeatureCard from 'components/feature-card'
import Head from 'next/head'

const featureData = [
  {
    id: 1,
    imgSrc: Balayage,
    altText: 'Balayage',
    title: 'Balayage',
    text:
      'A highlighting technique that creates a more natural, blended look. Foiled highlights create a harsh line of demarcation; balayage uses more of a gradual transition which creates a blended natural end result. This allows you to go longer between touch ups',
  },
  {
    id: 2,
    imgSrc: HairBot,
    altText: 'Hair Botox',
    title: 'Hair Botox',
    text:
      'An all natural, intense treatment that last up to 3-6 months. Hair btotx fills in broken or thinning areas on hair strands to make hair appear fuller and shiny. This treatment repairs damage, adds shine, reduces frizz, reduces hair fall out and promotes hair growth',
  },
  {
    id: 3,
    imgSrc: ColorCor,
    altText: 'Color Correction',
    title: 'Color Correction',
    text:
      'An aggressive or extreme change in hair color. It can be going from light to dark or from dark light. The session is charged per hour and can take anywhere from 3-6 hours. Before booking a color correction we recommend booking a consultation first',
  },
  {
    id: 4,
    imgSrc: HairOmb,
    altText: 'Ombre',
    title: 'Ombre',
    text:
      'A hair technique where all the ends are going be lightened and the transition from the deeper roots and light ends is going to be pretty short',
  },
]

const data = {
  subTitle: 'our services',
  title: 'I strive to make every client look and feel beautiful',
  features: [
    {
      id: 1,
      imgSrc: PremiumProd,
      altText: 'Smart Features',
      title: 'High Quality Products',
      text:
        'We use premium products when treating your hair because your hair matters',
    },
    {
      id: 2,
      imgSrc: HairSat,
      altText: 'An Experience to Remember',
      title: 'An Experience to Remember',
      text:
        'I love making people look and feel different about themseleves. My clients are my number one priority and always look to exceed their expectations with each visit',
    },
  ],
}

export default function ServiceSection() {
  const [videoOpen, setVideoOpen] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()

    setVideoOpen(true)
  }

  return (
    <section id='services' sx={{ variant: 'section.services' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <div>
            <Image src={ServiceThumb} alt='Thumbnail' />
            <Button
              sx={styles.videoBtn}
              onClick={handleClick}
              aria-label='Play Button'
            >
              <span>
                <IoIosPlay />
              </span>
            </Button>
          </div>
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt='shape' />
          </Box>
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature subTitle={data.subTitle} title={data.title} />

          <Grid sx={styles.grid}>
            {data.features.map((feature) => (
              <Box sx={styles.card} key={feature.id}>
                <Image
                  src={feature.imgSrc}
                  alt={feature.altText}
                  sx={styles.icon}
                />
                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{feature.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}> {feature.text}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
      <ModalVideo
        channel='youtube'
        isOpen={videoOpen}
        videoId='dQw4w9WgXcQ'
        onClose={() => setVideoOpen(false)}
      />

      <Container py='7' sx={styles.featureStyles}>
        <SectionHeader
          slogan='Popular Services'
          title='Most popular services'
        />
        <Grid sx={featureStyles.grid}>
          {featureData.map((item) => (
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

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`

const featureStyles = {
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

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.5,
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
    },
    svg: {
      fontSize: [40, null, 48, null, 62],
    },
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },

  icon: {
    width: ['45px', 'null', null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
}

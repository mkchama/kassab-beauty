/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Box, Heading, Text, Flex, Button, Image } from 'theme-ui'
import ShapeLeft from 'assets/shape-left.png'
import React, { useState, useEffect } from 'react'
import ShapeRight from 'assets/shape-right.png'
import SectionHeader from 'components/section-header'
import Zoom from 'react-medium-image-zoom'
import Balayagei1 from 'assets/bal1.jpg'
import Balayagei2 from 'assets/bal2.jpg'
import Balayagei3 from 'assets/bal3.jpg'
import Balayagei4 from 'assets/bal4.jpg'
import Balayagei5 from 'assets/bal5.jpg'
import Balayagei6 from 'assets/bal6.jpg'
import Balayagei7 from 'assets/bal7.jpg'
import Balayagei8 from 'assets/bal8.jpg'
import Balayagei9 from 'assets/bal9.jpg'
import Balayagei10 from 'assets/bal10.jpg'
import HairBotox1 from 'assets/bot1.jpg'
import HairBotox2 from 'assets/bot2.jpg'
import HairBotox3 from 'assets/bot3.jpg'
import HairBotox4 from 'assets/bot4.jpg'
import HairBotox5 from 'assets/bot5.jpg'

const images = [
  {
    id: '1',
    imgSrc: Balayagei1,
    tag: 'Balayage',
    title: 'Hair 2',
    text: 'Balayage Treatment',
  },
  {
    id: '2',
    imgSrc: Balayagei2,
    tag: 'Balayage',
    title: 'Hair 2',
    text: 'Balayage Treatment',
  },
  {
    id: '3',
    imgSrc: Balayagei3,
    tag: 'Balayage',
    title: 'Hair 2',
    text: 'Balayage Treatment',
  },
  {
    id: '4',
    imgSrc: Balayagei4,
    tag: 'Balayage',
    title: 'Hair 2',
    text: 'Balayage Treatment',
  },
  {
    id: '5',
    imgSrc: Balayagei5,
    tag: 'Balayage',
    title: 'Hair 2',
    text: 'Balayage Treatment',
  },
  {
    id: '6',
    imgSrc: Balayagei6,
    tag: 'Balayage',
    title: 'Hair 2',
    text: 'Balayage Treatment',
  },
  {
    id: '7',
    imgSrc: Balayagei7,
    tag: 'Balayage',
    title: 'Hair 2',
    text: 'Balayage Treatment',
  },
  {
    id: '8',
    imgSrc: Balayagei8,
    tag: 'Balayage',
    title: 'Hair 2',
    text: 'Balayage Treatment',
  },
  {
    id: '9',
    imgSrc: Balayagei9,
    tag: 'Balayage',
    title: 'Hair 2',
    text: 'Balayage Treatment',
  },
  {
    id: '10',
    imgSrc: Balayagei10,
    tag: 'Hair Botox',
    title: 'Hair 2',
    text: 'Balayage Treatment',
  },
  {
    id: '11',
    imgSrc: HairBotox1,
    tag: 'Hair Botox',
    title: 'Hair 2',
    text: 'Balayage Treatment',
  },
  {
    id: '12',
    imgSrc: HairBotox2,
    tag: 'Hair Botox',
    title: 'Hair 2',
    text: 'Balayage Treatment',
  },
  {
    id: '13',
    imgSrc: HairBotox3,
    tag: 'Hair Botox',
    title: 'Hair 2',
    text: 'Balayage Treatment',
  },
  {
    id: '14',
    imgSrc: HairBotox4,
    tag: 'Hair Botox',
    title: 'Hair 2',
    text: 'Balayage Treatment',
  },
  {
    id: '15',
    imgSrc: HairBotox5,
    tag: 'Hair Botox',
    title: 'Hair 2',
    text: 'Balayage Treatment',
  },
]

export default function Gallery() {
  const [tag, setTag] = useState('all')
  const [filteredImages, setFilteredImages] = useState([])

  useEffect(() => {
    tag === 'all'
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag))
  }, [tag])

  return (
    <section id='gallery' sx={{ variant: 'section.testimonial' }}>
      <Container>
        <Box sx={styles.banner.contentBox}>
          <SectionHeader slogan='Gallery' title='A showcase of my work' />
        </Box>
        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <TagButton
              name='all'
              tagActive={tag === 'all' ? true : false}
              handleSetTag={setTag}
            />
            <TagButton
              name='Balayage'
              tagActive={tag === 'Balayage' ? true : false}
              handleSetTag={setTag}
            />
            <TagButton
              name='Hair Botox'
              tagActive={tag === 'Hair Botox' ? true : false}
              handleSetTag={setTag}
            />
            <TagButton
              name='style'
              tagActive={tag === 'style' ? true : false}
              handleSetTag={setTag}
            />
          </Box>
        </Flex>
      </Container>
      <Container sx={styles.cardContainer}>
        {filteredImages.map((image) => (
          <Zoom>
            <Image
              className='bg-image hover-zoom'
              sx={styles.imageCard}
              key={image.id}
              src={image.imgSrc}
              alt={image.id}
              title={image.title}
              text={image.text}
            />
          </Zoom>
        ))}
      </Container>
    </section>
  )
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <Button
      className={`tag ${tagActive ? 'active' : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </Button>
  )
}

const styles = {
  cardContainer: {
    width: '100%',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: ['repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)'],
    gap: '2px',
    xs: '6',
  },

  imageCard: {
    padding: '5px',
    border: '1px solid #ddd',
    borderRadius: '2px',
  },

  buttonGroup: {
    justifyContent: 'start',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },

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
      backgroundPosition: 'Hair Botoxtom left',
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
      backgroundPosition: 'Hair Botoxtom right',
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

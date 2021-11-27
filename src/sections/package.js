/** @jsx jsx */
import { jsx, Container, Box, Flex, Grid, Heading, Text } from 'theme-ui'
import { keyframes } from '@emotion/core'
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import PriceCard from '../components/price-card'
import ButtonGroup from '../components/button-group'
import SectionHeader from '../components/section-header'
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io'
import PatternBG from 'assets/patternBG.png'
import ArrowOdd from 'assets/arrowOdd.svg'
import ArrowEven from 'assets/arrowEven.svg'

const workFlowData = [
  {
    id: 1,
    title: 'Contact Me',
    text: 'Filler text regarding whatever it is that needs to be thrown here.',
  },
  {
    id: 2,
    title: 'Come in for a Consultation',
    text: 'Filler text regarding whatever it is that needs to be thrown here.',
  },
  {
    id: 3,
    title: 'Let Me Perform My Magic',
    text: 'Filler text regarding whatever it is that needs to be thrown here.',
  },
  {
    id: 4,
    title: 'Leave With Amazing Results',
    text: 'Filler text regarding whatever it is that needs to be thrown here.',
  },
]

const packages = {
  monthly: [
    {
      id: 1,
      name: 'Hair Botox',
      description: '',
      priceWithUnit: '$385+',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Wash',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Treatment',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Straighten',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Take Home ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Color Correction',
      description: '',
      priceWithUnit: '$115/hr',

      anotherOption: 'Or Contact For More Info',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Lightening ',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Toner or Color',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Wash',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Style',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: 'Most Popular',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Balayage',
      description: '',
      priceWithUnit: '$215+',

      anotherOption: 'Or Contact For More Info',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Lightening',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Toner',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Wash',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Style',
          isAvailable: true,
        },
      ],
    },
  ],
  annual: [
    {
      id: 1,
      name: 'Hair Cut',
      description: '',

      priceWithUnit: '$68',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Wash',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Cut',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Style',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Full Color',
      description: 'Color of your choice',
      priceWithUnit: '$85+',

      anotherOption: 'Or Contact For More Info',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Color',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Wash',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Style',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      name: 'Regrowth',
      description: '',
      priceWithUnit: '$75+',

      anotherOption: 'Or Contact For More Info',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Color',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Wash',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Style',
          isAvailable: true,
        },
      ],
    },
    {
      id: 4,
      name: 'Highlights',
      description: '',
      priceWithUnit: '$115+',

      anotherOption: 'Or Contact For More Info',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Highlights',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Toner',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Style',
          isAvailable: true,
        },
      ],
    },
    {
      id: 5,
      name: 'Wash & Style',
      description: '',
      priceWithUnit: '$45+',

      anotherOption: 'Or Contact For More Info',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Wash',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Style',
          isAvailable: true,
        },
      ],
    },
    {
      id: 6,
      name: 'Up-do',
      description: '',
      priceWithUnit: '$75+/hr',

      anotherOption: 'Or Contact For More Info',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Style',
          isAvailable: true,
        },
      ],
    },
    {
      id: 7,
      name: 'Ombre',
      description: '',
      priceWithUnit: '$385+',

      anotherOption: 'Or Contact For More Info',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Lightening',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Toner',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Wash',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Style',
          isAvailable: true,
        },
      ],
    },
    {
      id: 8,
      name: 'Toner',
      description: '',
      priceWithUnit: '$75+',

      anotherOption: 'Or Contact For More Info',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Toner',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Wash',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Style',
          isAvailable: true,
        },
      ],
    },
  ],
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
}

export default function Package() {
  const { monthly, annual } = packages
  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  })

  const handlePricingPlan = (plan) => {
    if (plan === 'annual') {
      setState({ active: 'annual', pricingPlan: annual })
    } else {
      setState({ active: 'monthly', pricingPlan: monthly })
    }
  }
  const sliderParams = {
    additionalTransfrom: 0,
    arrows: true,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: false,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  }

  return (
    <section id='pricing' sx={{ variant: 'section.pricing' }}>
      <Container>
        <SectionHeader
          slogan='Pricing'
          title='Choose Your Service'
          isWhite={true}
        />
        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={state.active === 'monthly' ? 'active' : ''}
              type='button'
              aria-label='Monthly'
              onClick={() => handlePricingPlan('monthly')}
            >
              Hair Treatments
            </button>
            <button
              className={state.active === 'annual' ? 'active' : ''}
              type='button'
              aria-label='Annual'
              onClick={() => handlePricingPlan('annual')}
            >
              Hair Styling
            </button>
          </Box>
        </Flex>
        <Box sx={styles.pricingWrapper} className='pricing__wrapper'>
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((packageData) => (
              <Box sx={styles.pricingItem} key={packageData.id}>
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
      <Container sx={workFlowStyles.workflow}>
        <SectionHeader
          slogan='The Process'
          title='Get Started'
          isWhite={true}
        />
        <Grid sx={workFlowStyles.grid}>
          {workFlowData.map((item) => (
            <Box sx={workFlowStyles.card} key={item.id}>
              <Box sx={workFlowStyles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={workFlowStyles.wrapper}>
                <Heading sx={workFlowStyles.wrapper.title}>
                  {item.title}
                </Heading>
                <Text sx={workFlowStyles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`
const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
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
}

const workFlowStyles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
}

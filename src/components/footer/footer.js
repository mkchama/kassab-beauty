/** @jsx jsx */
import { jsx, Box, Container, Image, Text, Button } from 'theme-ui'
import { Link } from 'react-scroll'
import data from './footer.data'
import FooterLogo from 'assets/jenna-logo.svg'
import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaDribbble,
  FaInstagram,
} from 'react-icons/fa'

const social = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaInstagram />,
  },
]

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Button variant='textButton'>
            <Link
              activeClass='active'
              spy={true}
              offset={-70}
              duration={500}
              smooth={true}
              to='home'
            >
              <Image src={FooterLogo} alt='Logo' />
            </Link>
          </Button>

          <Box sx={styles.footer.menus}>
            <Box as='span'>
              <a
                style={{
                  padding: '10px',
                  color: '#000000',
                  textDecoration: 'none',
                }}
                href='https://instagram.com/kassabbeauty'
              >
                Instagram
              </a>
              <a
                style={{
                  padding: '10px',
                  color: '#000000',
                  textDecoration: 'none',
                }}
                href='https://facebook.com/kassabbeauty'
              >
                Facebook
              </a>
            </Box>
            <a
              style={{
                padding: '10px',
                color: '#000000',
                textDecoration: 'none',
              }}
              href={'mailto:jennakassab@gmail.com'}
            >
              Contact
            </a>
          </Box>
          <Text sx={styles.footer.copyright}>
            All Rights Reserved {new Date().getFullYear()} Kassab Beauty
          </Text>
        </Box>
      </Container>
    </footer>
  )
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
}

import React from 'react';
import { Title, Text, Container, Button, Overlay, createStyles } from '@mantine/core';
import { ArrowUpRight } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 180,
    paddingBottom: 130,
    backgroundImage:
      'url(/assets/images/june-reach.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    '@media (max-width: 520px)': {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `machina, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    height: 42,
    borderRadius: 25,
    fontSize: theme.fontSizes.md,
     fontFamily: 'machina',

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',
    borderRadius: 25,

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

export function HeroImageBackground() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
         <span className='machina'> Changing your wellness{' '}
          <Text component="span" inherit>
            with a new Ritual.
          </Text>
          </span>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            <span className='machina'>A boutique fitness experience centered around holistic care by providing
            the ultimate routine and Ritual. Start today with a free workout class</span>
          </Text>
        </Container>

        <div className={classes.controls}>
     
          <Button rightIcon={<ArrowUpRight />} className={classes.control} color="dark" variant="white" size="lg">
            Book class — free
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Check out trainers
          </Button>
        </div>
      </div>
    </div>
  );
}
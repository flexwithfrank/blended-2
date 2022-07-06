import { Group, Avatar, Text, Accordion } from '@mantine/core';
import React from 'react';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material'

const charactersList = [
  {
    image: '/assets/images/avatars/avatar-1.png',
    label: 'Can I try a free class?',
    description: '"Frankie — operations"',
    content: "You can take a free workout if it's your first time visiting. If you love the workout, we can start you on a week of workouts for only $25",
  },

  {
    image: '/assets/images/avatars/avatars-2.png',
    label: 'How much are memberships?',
    description: '"Moses — Trainer"',
    content: "Great question! We offer two memberships. Unlimited for $45/wk or Gold (2x visits) for $35",
  },
  {
    image: '/assets/images/avatar-frank.png',
    label: 'What are your ameneties?',
    description: '"Frankie — Operations"',
    content: 'We offer showers, towels, and full service smoothie bar',
  },
  {
    image: '/assets/images/avatar-frank.png',
    label: 'Do you offer parking?',
    description: 'Rachel — Operations',
    content: 'We have a parking garage available to all members! You can find it off of Thomas St. in an garage attached to our building',
  },
   {
    image: '/assets/images/avatar-frank.png',
    label: 'What does your wellness center offer?',
    description: 'Ally S. — Operations',
    content: 'Our wellness center offers Whole body Cryotherapy, private infrared suana, and compression therapy treatment.',
  },
]

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group noWrap>
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text size="lg" className='machina'>{label}</Text>
        <Text className='machina' size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

export function Faq() {
  const items = charactersList.map((item) => (
    <Accordion.Item label={<AccordionLabel {...item} />} key={item.label}>
      <Text className='machina' size="lg">{item.content}</Text>
    </Accordion.Item>
  ));

  return (
    <Container sx={{ borderRadius: 5, pb: 3, 
    backgroundColor: '#f0f0f6',  mt: 10, mb: 10}} maxWidth="md">
     
      <Typography fontSize={24}>
            <Box py={3} style={{color: 'black'}} 
            className='machina'>Frequently asked things!
            </Box>
          </Typography>
    <Accordion initialItem={-1} iconPosition="right">
      {items}
    </Accordion>
    </Container>
  );
}


import React from 'react';
import MedCardContainer from '../card-container/MedCardContainer';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Box, Button, Typography } from '@mui/material';
import { colors } from '../../theme/variables';
import MedButton from '../button/MedButton';
import { ThumbUp } from '@mui/icons-material';
import hospitalLogo from '../../assets/hospital.png';

function MedHospitalDetails({ id, title, state, city, zipCode, type, likes }) {
  return (
    <Box
      key={id}
      component='div'
      sx={{
        '&:not(last-child)': {
          marginBottom: '1.5rem',
        },
      }}
    >
      <MedCardContainer
        elevate={false}
        sx={{
          padding: '1.5rem',
        }}
      >
        <Grid2 container spacing={2} mt={2}>
          <Grid2
            md={2.5}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'translate(0, -2.5rem)',
            }}
          >
            <Box
              component='div'
              sx={{
                width: '7rem',
                height: '7rem',
              }}
            >
              <img
                src={hospitalLogo}
                alt='hospital'
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </Box>
          </Grid2>
          <Grid2 md={5.5}>
            <Typography component='p' fontWeight={600} fontSize='1.25rem' color={colors.skyBlue}>
              {title}
            </Typography>
            <Typography component='p' fontWeight={700} fontSize='0.875rem' color={colors.smokeDark} mt={1}>
              {city}, {state}, {zipCode}
            </Typography>
            <Typography component='p' fontSize='0.875rem' color={colors.smokeDark}>
              {type}
            </Typography>
            <Typography
              component='p'
              fontSize='0.875rem'
              color={colors.smokeDark}
              mt={0.5}
              pb={1.5}
              borderBottom='1px dashed'
              borderColor={colors.borderGrey}
            >
              <Typography component='span' color={colors.textDeepGreen} fontWeight={700}>
                FREE
              </Typography>{' '}
              <Typography
                component='span'
                color={colors.textGrey}
                sx={{
                  textDecoration: 'line-through',
                }}
              >
                ₹500
              </Typography>{' '}
              Consultation fee at clinic
            </Typography>
            <Box component='div' mt={2}>
              <MedButton
                sx={{
                  backgroundColor: colors.green,
                  padding: 0,
                  minWidth: '40px',
                  borderRadius: '3.5px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                size='small'
              >
                <ThumbUp sx={{ marginRight: '0.2rem', fontSize: '1rem' }} /> {likes}
              </MedButton>
            </Box>
          </Grid2>
          <Grid2
            md={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'column',
            }}
          >
            <Box
              component='div'
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
                flexDirection: 'row',
                height: '1rem',
                gap: '4%',
                width: '100%',
              }}
            >
              <Button variant='outlined' size='small' color='primary'>
                10:30 AM
              </Button>
              <Button variant='outlined' size='small' color='success'>
                20 April 2024
              </Button>
            </Box>
            <Box component='div' width='100%'>
              <Typography component='p' align='center' color={colors.textGreen} fontSize='0.875rem' mb={1}>
                Available Today
              </Typography>
              <MedButton
                sx={{
                  width: '100%',
                }}
              >
                Book FREE Center Visit
              </MedButton>
            </Box>
          </Grid2>
        </Grid2>
      </MedCardContainer>
    </Box>
  );
}

export default MedHospitalDetails;

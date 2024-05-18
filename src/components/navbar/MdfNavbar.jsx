import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { colors } from '../../theme/variables';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import MdfButton from '../button/MdfButton';
import { useLocation, useNavigate } from 'react-router-dom';

function MdfNavbar({ links, active }) {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <AppBar
            className='content-padding'
            position='static'
            color={active ? 'background' : 'transparent'}
            sx={{
                boxShadow: !active ? 'none' : null,
            }}
        >
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Logo />
                    <Typography
                        variant='h6'
                        noWrap
                        sx={{
                            ml: 0.5,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            color: colors.primary,
                            textDecoration: 'none',
                            fontSize: '1.12rem',
                            letterSpacing: '0.02em',
                            cursor: 'pointer',
                        }}
                    >
                        Medify
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        {links.map((link) => (
                            <Button
                                key={link.id}
                                sx={{
                                    display: 'block',
                                    fontWeight: 400,
                                    color: colors.dark,
                                    marginLeft: '1rem',
                                    paddingBlock: '1.5rem',
                                    borderBlock: '6px solid',
                                    borderRadius: 0,
                                    borderColor: 'transparent',
                                    '&.active': {
                                        color: colors.primary,
                                        borderBottomColor: colors.primary,
                                        fontWeight: 600,
                                    },
                                }}
                                className={location.pathname === link.to ? 'active' : ''}
                                onClick={() => navigate(link.to)}
                            >
                                {link.label}
                            </Button>
                        ))}

                        <MdfButton sx={{ marginLeft: '1rem' }}>My Bookings</MdfButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default MdfNavbar;

import { Box } from '@mui/material';
import React from 'react';
import MdfNotice from '../../components/notice/MdfNotice';
import MdfNavbar from '../../components/navbar/MdfNavbar';

const links = [
    { id: 1, label: 'Find Doctors', to: '/doctors' },
    { id: 2, label: 'Hospitals', to: '' },
    { id: 3, label: 'Medicines', to: '' },
    { id: 4, label: 'Surgeries', to: '' },
    { id: 5, label: 'Software for Provider', to: '' },
    { id: 6, label: 'Facilities', to: '' },
];

function Layout() {
    return (
        <Box component='main'>
            <MdfNotice />
            <MdfNavbar links={links} />
        </Box>
    );
}

export default Layout;

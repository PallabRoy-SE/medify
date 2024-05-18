import { Button } from '@mui/material';
import React from 'react';
import { colors } from '../../theme/variables';

function MdfButton({ onClick, startIcon, sx, children, ...attributes }) {
    return (
        <Button
            startIcon={startIcon}
            color='primary'
            variant='contained'
            onClick={onClick}
            sx={{
                fontSize: '0.875rem',
                fontWeight: 400,
                color: colors.white,
                borderRadius: '0.5rem',
                ...sx,
            }}
            {...attributes}
        >
            {children}
        </Button>
    );
}

export default MdfButton;

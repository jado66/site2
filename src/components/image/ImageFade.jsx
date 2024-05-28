import { Grid } from '@mui/material';

export const ImageFade = ({ children, color = '#161C24' }) => {
  return (
    <Grid
      sx={{
        display: 'inline-block',
        position: 'relative',
        overflow: 'hidden',

        '&::after': {
          content: '""',
          display: 'block',
          height: '100%',
          width: '100%',
          position: 'absolute',
          left: 0,
          top: 0,

          background: `linear-gradient(to right, ${color} 2%, transparent 4%, transparent 96%, ${color} 98%), linear-gradient(to bottom, ${color} 2%, transparent 4%, transparent 96%, ${color} 98%)`,
          pointerEvents: 'none',
        },
      }}
    >
      {children}
    </Grid>
  );
};

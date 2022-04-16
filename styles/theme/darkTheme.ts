import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    },
    typography: {
        fontFamily: [
            'Ubuntu Mono',
            'Jet Brains Mono',
            'monospace'
        ].join(',')
    }
});

export default darkTheme;
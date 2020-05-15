import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

export default theme; 
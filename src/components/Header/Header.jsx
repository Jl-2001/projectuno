import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
       <Container maxWidth="xl">
         <div>Header</div>
      </Container>
    </AppBar>
  )
}

export default Header
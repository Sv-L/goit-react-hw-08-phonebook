import { ListItem, ListItemText, Box } from '@mui/material';

const AuthNav = () => {
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <Box sx={{ marginLeft: 'auto', display: 'flex' }}>
      <ListItemLink href="/register">
        <ListItemText primary="Registration" />
      </ListItemLink>
      <ListItemLink href="/login">
        <ListItemText primary="Login" />
      </ListItemLink>
    </Box>
  );
};
export default AuthNav;

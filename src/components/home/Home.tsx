import { Button, Grid, Typography } from '@material-ui/core';

export default function Home(): JSX.Element {
  const handleClick = (): void => {};

  return (
    <Grid>
      <Typography>Welcome to Ecommerce App</Typography>
      <Typography>This is an example</Typography>
      <Button color="primary" variant="contained" onClick={handleClick}>
        Send Xhr
      </Button>
    </Grid>
  );
}

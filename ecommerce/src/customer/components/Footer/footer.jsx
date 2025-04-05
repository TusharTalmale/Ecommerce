import { Grid, Link, Typography, Box, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'black',
        color: 'white',
        py: 3,
        mt:5,
        textAlign: 'center',
      }}
    >
      {/* Footer Sections */}
      <Grid container spacing={4} justifyContent="center">
        
        {/* Company Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Company</Typography>
          {["About", "Blog", "Jobs", "Press", "Partners"].map((item) => (
            <Typography
              key={item}
              variant="body2"
              sx={{ opacity: 0.8, '&:hover': { opacity: 1, cursor: 'pointer' } }}
            >
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Solutions Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Solutions</Typography>
          {["Marketing", "Analytics", "Commerce", "Insights", "Support"].map((item) => (
            <Typography
              key={item}
              variant="body2"
              sx={{ opacity: 0.8, '&:hover': { opacity: 1, cursor: 'pointer' } }}
            >
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Documentation Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Documentation</Typography>
          {["Guides", "API Status"].map((item) => (
            <Typography
              key={item}
              variant="body2"
              sx={{ opacity: 0.8, '&:hover': { opacity: 1, cursor: 'pointer' } }}
            >
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Legal Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Legal</Typography>
          {["Claim", "Privacy", "Terms"].map((item) => (
            <Typography
              key={item}
              variant="body2"
              sx={{ opacity: 0.8, '&:hover': { opacity: 1, cursor: 'pointer' } }}
            >
              {item}
            </Typography>
          ))}
        </Grid>

      </Grid>

      {/* Divider */}
      <Divider sx={{ bgcolor: 'gray', my: 3, mx: 'auto', width: '80%' }} />

      {/* Footer Bottom Section */}
      <Box>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Made with ❤️ by Me.
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Icons by{' '}
          <Link href="https://www.freepik.com" color="inherit" underline="always">
            Freepik
          </Link>{' '}
          from{' '}
          <Link href="https://www.flaticon.com/" color="inherit" underline="always">
            Flaticon
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

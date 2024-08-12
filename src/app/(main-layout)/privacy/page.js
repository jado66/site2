import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Divider } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Privacy Policy
        </Typography>

        <Section title="1. Introduction">
          <Typography paragraph>
            Welcome to Platinum Programming. We respect your privacy and are committed to protecting
            your personal data. This privacy policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website www.platinumprogramming.com (the
            "Site") or use our services.
          </Typography>
        </Section>

        <Section title="2. Information We Collect">
          <Typography paragraph>
            We may collect information about you in a variety of ways. The information we may
            collect includes:
          </Typography>

          <SubSection title="2.1 Personal Data">
            <List>
              <ListItem>
                <ListItemText primary="Your name" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Company Name" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email address" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Telephone number" />
              </ListItem>
              {/* <ListItem>
                <ListItemText primary="Date of birth" />
              </ListItem> */}
              {/* <ListItem>
                <ListItemText primary="Payment information (credit card numbers, banking details)" />
              </ListItem> */}
            </List>
          </SubSection>

          <SubSection title="2.2 Derivative Data">
            <Typography paragraph>
              Information our servers automatically collect when you access the Site, such as:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Your IP address" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Browser type and version" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Operating system" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Access times and dates" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Referring website addresses" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Pages viewed on our Site" />
              </ListItem>
            </List>
          </SubSection>

          {/* Add other subsections (2.3, 2.4) similarly */}
        </Section>

        <Section title="3. Use of Your Information">
          <Typography paragraph>
            We use the information we collect about you for various purposes, including:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Creating and managing your account" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Processing transactions" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Sending you order confirmations and updates" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Responding to your comments, questions, and requests" />
            </ListItem>
            {/* Add other list items */}
          </List>
        </Section>

        {/* Add other main sections (4, 5, 6, 7, 8, 9) similarly */}

        <Section title="9. Contact Us">
          <Typography paragraph>
            If you have questions or comments about this privacy policy, please contact us at:
          </Typography>
          <Typography paragraph>
            Platinum Programming
            <br />
            Contact@PlatinumProgramming.com
            <br />
            +1 (385) 309-1356
          </Typography>
        </Section>

        <Typography variant="body2" color="text.secondary" align="center">
          Last Updated: 7/22/2024
        </Typography>
      </Box>
    </Container>
  );
};

const Section = ({ title, children }) => (
  <Box mb={4}>
    <Typography variant="h4" component="h2" gutterBottom>
      {title}
    </Typography>
    {children}
    <Divider sx={{ my: 2 }} />
  </Box>
);

const SubSection = ({ title, children }) => (
  <Box mb={2}>
    <Typography variant="h5" component="h3" gutterBottom>
      {title}
    </Typography>
    {children}
  </Box>
);

export default PrivacyPolicy;

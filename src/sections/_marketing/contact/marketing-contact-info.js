import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import {
  inqueryEmail,
  inqueryEmailLink,
  inqueryPhoneLink,
  inqueryPhoneText,
} from 'src/constants/contact';

// ----------------------------------------------------------------------

export default function MarketingContactInfo() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Stack spacing={3}>
      {mdUp && (
        <Image
          alt="marketing contact"
          src="/assets/illustrations/illustration_marketing_contact.svg"
          sx={{ maxWidth: 380 }}
        />
      )}

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:mobile" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Call or text us</Typography>
          <Link color="inherit" variant="body2" href={inqueryPhoneLink}>
            {inqueryPhoneText}
          </Link>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:email" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Talk to us</Typography>
          <Link color="inherit" variant="body2" href={inqueryEmailLink}>
            {inqueryEmail}
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}

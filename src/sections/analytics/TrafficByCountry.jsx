import { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import SvgIcon from '@mui/material/SvgIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify';

function descendingComparator(a, b, sortBy) {
  // When compared to something undefined, always returns false.
  // This means that if a field does not exist from either element ('a' or 'b') the return will be 0.

  if (b[sortBy] < a[sortBy]) {
    return -1;
  }

  if (b[sortBy] > a[sortBy]) {
    return 1;
  }

  return 0;
}

function getComparator(sortDir, sortBy) {
  return sortDir === 'desc'
    ? (a, b) => descendingComparator(a, b, sortBy)
    : (a, b) => -descendingComparator(a, b, sortBy);
}

function applySort(documents, sortBy, sortDir) {
  const comparator = getComparator(sortDir, sortBy);
  const stabilizedThis = documents.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const newOrder = comparator(a[0], b[0]);

    if (newOrder !== 0) {
      return newOrder;
    }

    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}

const flagMap = {
  ca: '/assets/flags/flag-ca.svg',
  de: '/assets/flags/flag-de.svg',
  es: '/assets/flags/flag-es.svg',
  ru: '/assets/flags/flag-ru.svg',
  uk: '/assets/flags/flag-uk.svg',
  us: '/assets/flags/flag-us.svg',
};

export const AnalyticsVisitsByCountry = (props) => {
  const { visits } = props;
  const [sort, setSort] = useState('desc');

  const sortedVisits = useMemo(() => {
    return applySort(visits, 'value', sort);
  }, [visits, sort]);

  const handleSort = useCallback(() => {
    setSort((prevState) => {
      if (prevState === 'asc') {
        return 'desc';
      }

      return 'asc';
    });
  }, []);

  return (
    <Card>
      <CardHeader
        title="Visits by Country"
        action={
          <Tooltip title="Refresh rate is 24h">
            <SvgIcon color="action">
              <Iconify icon="bi:info-circle" width={16} height={16} color="inherit" />
            </SvgIcon>
          </Tooltip>
        }
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell sortDirection={sort}>
              <TableSortLabel active direction={sort} onClick={handleSort}>
                Value
              </TableSortLabel>
            </TableCell>
            <TableCell>SEO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedVisits.map((visit) => {
            const visits = numeral(visit.value).format('0,0');
            const flag = flagMap[visit.id];

            return (
              <TableRow key={visit.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                    }}
                  >
                    <Box
                      sx={{
                        height: 16,
                        width: 16,
                        '& img': {
                          height: 16,
                          width: 16,
                        },
                      }}
                    >
                      <img alt={visit.name} src={flag} />
                    </Box>
                    <Typography sx={{ ml: 1 }} variant="subtitle2">
                      {visit.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{visits}</TableCell>
                <TableCell>{visit.seoPercentage}%</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Divider />
      <CardActions>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon>
              <Iconify icon="carbon:chevron-right" width={16} height={16} color="inherit" />
            </SvgIcon>
          }
          size="small"
        >
          See more
        </Button>
      </CardActions>
    </Card>
  );
};

AnalyticsVisitsByCountry.propTypes = {
  visits: PropTypes.array.isRequired,
};

// @mui
import { alpha, styled } from '@mui/material/styles';
import { Mixins, Palette, Shadows, Theme, Transitions, ZIndex, TableFooter } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// ----------------------------------------------------------------------

interface IStyledProps{
  theme: {
    mixins: Mixins;
    palette: Palette;
    shadows: Shadows;
    transitions: Transitions;
    typography: Typography;
    zIndex: ZIndex;
    unstable_strictMode?: boolean;
  }
}

export const StyledTable = styled(Table)(({ theme }: IStyledProps) => {
  const isLight = theme.palette.mode === "light";
  const styles = {}
  return {
    ...styles
  }
})

export const StyledTableHead = styled(TableHead)(({ theme }: IStyledProps) => {
  const isLight = theme.palette.mode === "light";
  const styles = {}
  return {
    ...styles
  }
})

export const StyledTableBody = styled(TableBody)(({ theme }: IStyledProps) => {
  const isLight = theme.palette.mode === "light";
  const styles = {}
  return {

  }
})

export const StyledTableRow = styled(TableRow)(({ theme }: IStyledProps) => {
  const isLight = theme.palette.mode === "light";
  const styles = {
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }
  return {
    ...styles
  }
})

export const StyledTableCell = styled(TableCell)(({theme}: IStyledProps) => {
  const isLight = theme.palette.mode === "light";
  const styles = {
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }
  return {
    ...styles
  }
});

export const StyledTableFooter = styled(TableFooter)(({theme}: IStyledProps) => {
  const isLight = theme.palette.mode === "light";
  const styles = {
    
  }
  return {
    ...styles
  }
})



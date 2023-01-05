// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Mixins, Palette, Shadows, Theme, Transitions, ZIndex, Avatar, Modal, Pagination } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';
import TablePagination from '@mui/material/TablePagination';

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

  export const StyledPagination = styled(Pagination)(({theme}: IStyledProps) => {
    const styles = {

    }
    return {
      ...styles
    }
  })


  export const StyledTablePagination = styled(TablePagination)(({theme}: IStyledProps) => {
    const styles = {
        
    }
    return {
        ...styles
    }
  })


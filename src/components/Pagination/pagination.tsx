import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import {MdLastPage, MdFirstPage, MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import { StyledPagination, StyledTablePagination } from './styles';
import Stack from '@mui/material/Stack';

interface PaginationProps {
  isTablePagination?: boolean,
  rowsPerPageOptions?: Array<any>,
  colSpan?: number,
  count?: number,
  rowsPerPage?: number,
  page?: number,
  SelectProps?: any,
  boundaryCount?: number,
  color?: 'primary'| 'secondary'| 'standard',
  defaultPage?: number,
  disabled?: boolean,
  hideNextButton?: boolean,
  hidePrevButton?: boolean,
  shape?: 'circular'| 'rounded',
  showFirstButton?: boolean,
  showLastButton?: boolean,
  siblingCount?: number,
  size?: 'small'| 'medium'| 'large',
  variant?: 'outlined'| 'text',
  sx?: any,
  setPage?: React.Dispatch<React.SetStateAction<number>>
  setRowsPerPage?: React.Dispatch<React.SetStateAction<number>>
}

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
   
    const handleFirstPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>,
    ) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <MdLastPage /> : <MdFirstPage />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <MdFirstPage /> : <MdLastPage />}
        </IconButton>
      </Box>
    );
  }

 const Pagination = ({isTablePagination,rowsPerPageOptions,colSpan,count=0,rowsPerPage=0,page=0,SelectProps,setPage=() => {},setRowsPerPage=() => {}, ...other}:PaginationProps) => {

  const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | unknown,
      newPage: number,
    ) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
        return (
      <>
      {
        isTablePagination ? 
        <StyledTablePagination
          {...{
            rowsPerPageOptions: rowsPerPageOptions,
            colSpan: colSpan,
            count: count,
            rowsPerPage: rowsPerPage,
            page: page,
            SelectProps: SelectProps,
            onPageChange: handleChangePage,
            onRowsPerPageChange: handleChangeRowsPerPage,
            ActionsComponent: TablePaginationActions,
          }}
          sx={{...other.sx}}        
        />        
        :
        <Stack spacing={2}>
          <StyledPagination
            {...{
              count: count,
              boundaryCount: other.boundaryCount,
              color: other.color,
              defaultPage: other.defaultPage,
              disabled: other.disabled,
              hideNextButton: other.hideNextButton,
              hidePrevButton: other.hidePrevButton,
              shape: other.shape,
              showFirstButton: other.showFirstButton,
              showLastButton: other.showLastButton,
              siblingCount: other.siblingCount,
              size: other.size,
              variant: other.variant,
              onChange:handleChangePage
            }}
            sx={{...other.sx}}        
          />
        </Stack>
      }
      </>
    )
  }

  export default Pagination;
import React from 'react'
import { StyledTable, StyledTableBody, StyledTableRow, StyledTableCell, StyledTableHead, StyledTableFooter } from './styles'
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import IconButton from '@mui/material/IconButton';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md"

interface Cols{
  columnKey ?: string,
  columnLabel ?: string | React.ReactNode,
  render ?: (row : any) => React.ReactNode
}

interface TableProps{
  cols ?: Array<Cols>,
  data ?: Array<object>, 
  isExpandable ?: boolean, 
  expandCols ?: Array<object>, 
  expandLabelKey?: string,
  preloading ?: boolean,
  className ?: string,
  onExpand ?: (row : object, id : string) => void,
  sx?: any,
  isPagination?: boolean,
  page?: number,
  rowsPerPage?: number,
}

interface TableHeaders{
  cols : Array<Cols>,
  isExpandable : boolean
}

interface TableBodyRow{
  row ?: {[key : string] : any},
  cols ?: Array<Cols>,
  isExpandable ?: boolean,
  expandCols ?: Array<Cols>,
  expandLabelKey?:string,
  onExpand ?: (row : object, id : string) => void
}

const getTableHeaders = ({cols, isExpandable} : TableHeaders) => {
  return <StyledTableRow>
      {isExpandable && <StyledTableCell sx={{width: "15px"}} />}
      {cols?.map((header, index) => <StyledTableCell id={String(index)} key={`th-${index}`}>
          <span>{header?.columnLabel}</span>
      </StyledTableCell>)}
  </StyledTableRow>
}

const  TableBodyRow = ({row = {}, cols = [], isExpandable, expandCols, expandLabelKey, onExpand = () => {/* */}} : TableBodyRow) =>  {
  const [isExpand, setIsExpand] = React.useState(false);
  const [loader, setLoader] = React.useState(false);

  const onExpandClick = async (id : string) => {
        let timer;
        setIsExpand(!isExpand)
        if(!isExpand){
            clearTimeout(timer);
            setLoader(true);
            await onExpand(row, id);
            timer = setTimeout(() => {
                setLoader(false)
            }, 400)
        }
    }

  return (
    <React.Fragment>
      <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        {isExpandable && <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => onExpandClick(row?.definitionId)}
          >
            {isExpand ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </IconButton>
        </StyledTableCell>}
        {
          cols.map((col,key) => (
            <StyledTableCell key={key}>{col.render!(row)}</StyledTableCell>
          ))
        }
      </StyledTableRow>
      {(isExpandable && isExpand) && (loader ? 
            <StyledTableRow data-action="expandable-row">
                <StyledTableCell colSpan={cols?.length + 1}>
                    <div style={{height : "80px", display : "flex", justifyContent : "center",alignItems : "center"}}>
                        <div className="text-center my-4">
                            <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    </div>
                </StyledTableCell>
            </StyledTableRow> :
            <StyledTableRow>
              <StyledTableCell colSpan={cols.length+1}>
                <Table
                  {...{
                    cols: expandCols,
                    data: expandLabelKey ? row?.[expandLabelKey] : [],
                    isExpandable: false,
                    isPagination: false
                  }}
                />
              </StyledTableCell>  
            </StyledTableRow>
      )}
    </React.Fragment>
  );
}

const Table = (tableProps : TableProps) => {
  const {cols = [], data = [], isExpandable = false, expandCols, expandLabelKey, onExpand,  preloading, className, sx, isPagination, page=0, rowsPerPage=0} = tableProps;
  return (
      <TableContainer
      component={Paper}
    >
      <StyledTable
        sx={{ ...sx, minWidth: 650}}
        aria-label="collapsible table"
      >
        <StyledTableHead>
          {getTableHeaders({cols, isExpandable})}
        </StyledTableHead>
        <StyledTableBody>
          {preloading ? 
            <StyledTableRow>
              <StyledTableCell colSpan={cols?.length+1}>
                  <div style={{height : "80px", display : "flex", justifyContent : "center",alignItems : "center"}}>
                      <div className="text-center my-4">
                          <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                      </div>
                  </div>
                  </div>
              </StyledTableCell>
            </StyledTableRow> :
            <>
              {
                data.length > 0 ? <>
                  {(rowsPerPage > 0
                    ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : data
                  ).map((row,index) => (
                    <TableBodyRow key={index} {...{row, cols, isExpandable, expandCols, expandLabelKey, onExpand}} />
                  ))}
                </> : 
                  <StyledTableRow>
                      <StyledTableCell colSpan={cols?.length+1}>
                          <div style={{height : "40px", display : "flex", justifyContent : "center",alignItems : "center"}}>
                              <div className="text-center">
                                  <h6>No Data Available</h6>    
                              </div>
                          </div>
                      </StyledTableCell>
                  </StyledTableRow>
              }
            </>
          } 
        </StyledTableBody>
      </StyledTable>
    </TableContainer>    
  )
}

export default Table
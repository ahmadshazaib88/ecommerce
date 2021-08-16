import {
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from '@material-ui/core';
import Label from '../Label';
import Scrollbar from '../Scrollbar';
import TrashIcon from "../../icons/Trash";
import LinkDeviceModal from './LinkDeviceModal';
import React, { useState } from 'react';

// TODO: Not completed yet

const VehicleTable = ({ data, onSelect, activeSelection, onEditClick = undefined, onDeleteClick = undefined }) => {
  // const [page, setPage] = useState(1);

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          p: 3
        }}
      >
        <Card>
          <Scrollbar>
            <Box >
              <Table>
                <TableHead displaySelectAll={true}>
                  <TableRow>
                    <TableCell>
                      Vehicle
                    </TableCell>
                    <TableCell>
                      Status
                    </TableCell>
                    <TableCell>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.docs?.map((d) => (
                    <TableRow
                      hover
                      key={d._id}
                      selected={activeSelection === d}
                      onClick={() => onSelect(d)}
                      style={{ cursor: 'pointer', }}
                    >
                      <TableCell>
                        <Box>
                          {d.name}
                        </Box>
                        <Box sx={{ pt: 0.5 }}>
                          {d.year} {d.make}
                        </Box>
                      </TableCell>
                      <TableCell>
                        {d.status == "Driving" ? (
                          <Label color="success" sx={{ color: "primary.contrastText" }}>
                            {d.status}
                          </Label>
                        ) : (
                          <Label sx={{ backgroundColor: "gray" }}>
                            {d.status}
                          </Label>
                        )}
                      </TableCell>
                      <TableCell sx={{ ml: 0, pl: 0 }}>
                        <LinkDeviceModal
                          name={d.name}
                        />
                        <IconButton
                          onClick={() => onDeleteClick(d)}
                        >
                          <TrashIcon color="secondary" fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Scrollbar>
          {/* <TablePagination
            component="div"
            count={invoices.length}
            onPageChange={() => {
            }}
            onRowsPerPageChange={() => {
            }}
            page={0}
            rowsPerPage={5}
            rowsPerPageOptions={[5, 10, 25]}
          /> */}
        </Card>
      </Box>
    </>
  );
};

export default VehicleTable;

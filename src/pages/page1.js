import React, { useState } from "react";
// exel
import { CSVLink } from "react-csv";
// material
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  Paper,
  TableBody,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
// icons
import { AiOutlineTransaction } from "react-icons/ai";
import { FaUserClock } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { RiFileExcel2Line } from "react-icons/ri";
// router
import { useNavigate } from "react-router-dom";
// utils
import configData from "../utils/config.json";
// --------------------------------- //

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export default function Page1() {
  const [configCard, setConfigCard] = useState(null);
  const [configBank, setConfigBank] = useState(null);
  const [dateFrom, setDateFrom] = useState(formatDate("1/1/2000"));
  const [dateTo, setDateTo] = useState(formatDate(new Date()));

  const theme = useTheme();
  const Navigate = useNavigate();
  const handleClick = (id) => {
    return Navigate(id);
  };
  const handleCard = (event) => {
    setConfigCard(event.target.value);
  };
  const handleBank = (event) => {
    setConfigBank(event.target.value);
  };
  const camelCase = (str) => {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  };
  const filterColumns = (data) => {
    // Get column names
    const columns = Object.keys(data[0]);
    let headers = [];
    columns.forEach((col, idx) => {
      if (col !== "firstname") {
        // OR if (idx !== 0)
        headers.push({ label: camelCase(col), key: col });
      }
    });

    return headers;
  };
  return (
    <Box sx={{ p: 2 }}>
      <Typography sx={{ display: "flex", alignItems: "center" }}>
        <AiOutlineTransaction />
        Transaction
      </Typography>
      <Box>
        <TabCustom>
          <Button
            startIcon={<FaUserClock />}
            sx={{
              border: "1px solid #ccc",
              borderBottom: "none",
              borderRadius: 0,
            }}>
            ປະຫວັດການຊຳລະ
          </Button>
          <Box sx={{ flexGrow: 1, borderBottom: "1px solid #ccc" }} />
        </TabCustom>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gridGap: 10,
            py: 2,
          }}>
          <TextField
            id='outlined-select-currency'
            select
            onChange={handleCard}
            value={configCard}
            InputLabelProps={{
              style: { color: theme.palette.text.primary },
            }}
            label='ປະເພດບັດ'
            size='small'>
            {[...new Set(configData.map((e) => e["ປະເພດບັດ"]))].map((e) => (
              <MenuItem key={e} value={e}>
                {e}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id='outlined-select-currency'
            label='ທະນາຄານ'
            size='small'
            select
            onChange={handleBank}
            value={configBank}
            InputLabelProps={{
              style: { color: theme.palette.text.primary },
            }}>
            {[...new Set(configData.map((e) => e["ຊຳລະຜ່ານ"]))].map((e) => (
              <MenuItem key={e} value={e}>
                {e}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label='ເລກໃບບິນ'
            id='outlined-size-small'
            size='small'
            InputLabelProps={{
              style: { color: theme.palette.text.primary },
            }}
          />
          <TextField
            label='ວັນຊຳລະເງິນ'
            id='outlined-size-small'
            size='small'
            value={dateFrom}
            onChange={(e) => {
              setDateFrom(e.target.value);
            }}
            type='date'
            defaultValue='2022-01-01'
            endAdornment={<BsFillCalendarDateFill />}
            InputLabelProps={{
              style: { color: theme.palette.text.primary },
            }}
          />
          <TextField
            label='ຫາວັນທີ'
            id='outlined-size-small'
            size='small'
            type='date'
            value={dateTo}
            onChange={(e) => {
              setDateTo(e.target.value);
            }}
            InputLabelProps={{
              style: { color: theme.palette.text.primary },
            }}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton>
                  <BsFillCalendarDateFill />
                </IconButton>
              </InputAdornment>
            }
          />
          <TextField
            label='ເບີໂທ'
            id='outlined-size-small'
            size='small'
            InputLabelProps={{
              style: { color: theme.palette.text.primary },
            }}
          />
        </Box>
        <Box sx={{ py: 2, display: "flex", justifyContent: "flex-end" }}>
          <CSVLink
            data={configData}
            headers={filterColumns(configData)}
            filename={"test.csv"}
            style={{ textDecoration: "none" }}>
            <Button
              variant='outlined'
              startIcon={<RiFileExcel2Line />}
              sx={{ textDecoration: "none" }}>
              ດາວໂຫຼດ Excel
            </Button>
          </CSVLink>
        </Box>
        <Box sx={{ py: 2 }}>
          <TableContainer component={Paper} elevation={0}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>#</TableCell>
                  <TableCell>ປະເພດບັດ</TableCell>
                  <TableCell>ຊື່ບັດ</TableCell>
                  <TableCell>ຊຳລະຜ່ານ</TableCell>
                  <TableCell>ຈຳນວນເງິນ</TableCell>
                  <TableCell>ພາສີ 3%</TableCell>
                  <TableCell>ຄ່າບໍລິການ</TableCell>
                  <TableCell>ຈຳນວນເງິນທັງໝົດ</TableCell>
                  <TableCell>ວັນທີຊຳລະ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {configData
                  .filter((e) => {
                    if (configCard !== null && configCard !== e["ປະເພດບັດ"])
                      return false;
                    if (configBank !== null && configBank !== e["ຊຳລະຜ່ານ"])
                      return false;
                    if (
                      new Date(dateFrom).getTime() >
                      new Date(e["ວັນທີຊຳລະ"]).getTime()
                    )
                      return false;
                    if (
                      new Date(dateTo).getTime() <
                      new Date(e["ວັນທີຊຳລະ"]).getTime()
                    )
                      return false;
                    return true;
                  })
                  .map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#eee",
                        },
                      }}
                      onClick={() => handleClick(row.id)}>
                      <TableCell align='center'>{row["id"]}</TableCell>
                      <TableCell>{row["ປະເພດບັດ"]}</TableCell>
                      <TableCell>{row["ຊື່ບັດ"]}</TableCell>
                      <TableCell>{row["ຊຳລະຜ່ານ"]}</TableCell>
                      <TableCell>{row["ຈຳນວນເງິນ"]}</TableCell>
                      <TableCell>{row["ພາສີ 3%"]}</TableCell>
                      <TableCell>{row["ຄ່າບໍລິການ"]}</TableCell>
                      <TableCell>{row["ຈຳນວນເງິນທັງໝົດ"]}</TableCell>
                      <TableCell>{row["ວັນທີຊຳລະ"]}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
const TabCustom = styled(Box)(({ theme }) => ({
  padding: 10,
  display: "flex",
}));

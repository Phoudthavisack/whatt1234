import React from "react";
// material
import { Box, Typography, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// router
import { Link, useParams } from "react-router-dom";
// icons

// utils
import configData from "../utils/config.json";
// --------------------------------- //

export default function Page1() {
  const { id } = useParams();
  const theme = useTheme();
  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: 14,
        }}>
        <Typography
          component={Link}
          to='/transaction'
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: 14,
            color: theme.palette.primary.main,
            textDecoration: "none",
          }}>
          Transaction
        </Typography>
        `{">"}`
        <Typography
          sx={{ display: "flex", alignItems: "center", fontSize: 14 }}>
          {configData.find((x) => x.id === id)["ຊື່ບັດ"]}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: 50,
          pt: 2,
        }}>
        <Box>
          <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
            ຕົ້ນທາງການຊຳລະ
          </Typography>
          <Divider />
          <Box sx={{ display: "flex", pt: 2 }}>
            <Box>ປະເພດບັດ</Box>
            <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{ color: "#141414" }}>Master Card</Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", pt: 2 }}>
            <Box>ຊື່ບັດ</Box>
            <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{ color: "#141414" }}>
              Malina PHETXOMPHOU
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", pt: 2 }}>
            <Box>ລະຫຼັດບັດ</Box>
            <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{ color: "#141414" }}>xx-xxxxx98984</Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", pt: 2 }}>
            <Box>ດດ/ປປ</Box>
            <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{ color: "#141414" }}>02/2017</Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", pt: 2 }}>
            <Box>ເລກບິນ</Box>
            <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{ color: "#141414" }}>xx-xxxxx98984</Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", pt: 2 }}>
            <Box>strip</Box>
            <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{ color: "#141414" }}>123</Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", pt: 2 }}>
            <Box>ເບີໂທລະສັບ</Box>
            <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{ color: "#141414" }}>020 98765432</Typography>
          </Box>
          <Divider />
        </Box>
        <Box>
          <Box>
            <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
              ປາຍທາງການຊຳລະ
            </Typography>
            <Divider />
            <Box sx={{ display: "flex", pt: 2 }}>
              <Box>ທະນາຄານ</Box>
              <Box sx={{ flexGrow: 1 }} />
              <Typography sx={{ color: "#141414" }}>BCEL One</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", pt: 2 }}>
              <Box>ຊື່ຮ້ານ</Box>
              <Box sx={{ flexGrow: 1 }} />
              <Typography sx={{ color: "#141414" }}>
                Malina PHETXOMPHOU
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", pt: 2 }}>
              <Box>ລະຫຼັດບັດ</Box>
              <Box sx={{ flexGrow: 1 }} />
              <Typography sx={{ color: "#141414" }}>xx-xxxxx98984</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", pt: 2 }}>
              <Box>ເລກໃບບິນ</Box>
              <Box sx={{ flexGrow: 1 }} />
              <Typography sx={{ color: "#141414" }}>
                29348049549540389
              </Typography>
            </Box>
            <Divider />
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              justifyContent: "flex-end",
              alignItems: "end",
            }}>
            <Box sx={{ minWidth: 300 }}>
              <Box sx={{ display: "flex", pt: 2 }}>
                <Box>ຈຳນວນເງິນ</Box>
                <Box sx={{ flexGrow: 1 }} />
                <Typography sx={{ color: "#141414" }}>120,000</Typography>
              </Box>
              <Divider />
              <Box sx={{ display: "flex", pt: 2 }}>
                <Box>ຄ່າທຳນຽມ</Box>
                <Box sx={{ flexGrow: 1 }} />
                <Typography sx={{ color: "#141414" }}>3% + 4000</Typography>
              </Box>
              <Divider />
              <Box sx={{ display: "flex", pt: 2 }}>
                <Box>ຈຳນວນເງິນທັງໝົດ</Box>
                <Box sx={{ flexGrow: 1 }} />
                <Typography sx={{ color: "#141414" }}>127,000</Typography>
              </Box>
              <Divider />
              <Box sx={{ display: "flex", pt: 2 }}>
                <Box>ວັນທີຊຳລະ</Box>
                <Box sx={{ flexGrow: 1 }} />
                <Typography sx={{ color: "#141414" }}>27/03/2022</Typography>
              </Box>
              <Divider />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

import * as React from "react";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Footer from "./Footer.jsx";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  Box,
  Button,
  TextField,
  MenuItem,
  Alert,
  Snackbar
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SendIcon from '@material-ui/icons/Send';

const currencies = [
  {
    value: '1',
    label: '우리은행',
  },
  {
    value: '2',
    label: '우리은행',
  },
  {
    value: '3',
    label: '우리은행',
  },
  {
    value: '4',
    label: '우리은행',
  },
  {
    value: '5',
    label: '우리은행',
  },
];

export default function NFTCreate() {
  const [currency, setCurrency] = React.useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const sendMessage = () => {
    handleClick()
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Link to={`/register`} css={{ width: "fit-content" }}>
      <React.Fragment>
        <Header title="Hippy" />
        <Container maxWidth="md">
          <register>
            <Box>
              <Grid
                container
                spacing={0}            
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <Grid item xs={12} alignContent="center" justifyContent="center">
                    <Typography
                        component="h2"
                        sx={{
                          fontSize: "1.5rem",
                          marginTop: "3rem"
                        }}
                        align="center"
                        color="#1B7EA6">
                      은행 계좌 등록하기
                    </Typography>
                    <Typography
                      component="h2"
                      sx={{
                        fontSize: "0.9rem",
                        margin: "2rem"
                      }}
                      align="center"
                      color="#585858">
                      디지털 자산을 구매 및 판매할 때<br></br> 사용할 현금 거래 은행 계좌를 등록해주세요!
                    </Typography>
                </Grid>
                <Grid container item xs={12} justifyContent="center" sx={{ flexDirection: "column" }}>
                  <TextField
                    required
                    select
                    label="은행 선택"
                    value={currency}
                    onChange={handleChange}
                    helperText="거래 은행을 선택해주세요"
                    variant="outlined"
                    sx={{width: "13rem", margin: "0rem auto"}}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField 
                    required
                    label="계좌 번호 입력" 
                    variant="outlined"
                    sx={{margin: "1rem auto", width: "25rem"}}
                    id="outlined-helperText"
                    helperText="본인의 계좌 번호를 입력해주세요"
                  />
                </Grid>
                <Grid container item xs={6} justifyContent="center" sx={{ flexDirection: "row", margin: "0rem auto" }}>
                  <TextField 
                    required
                    label="휴대폰 번호 입력" 
                    variant="outlined"
                    sx={{margin: "0.5rem", width: "16rem"}}
                    helperText="휴대폰 번호를 입력해주세요"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{margin: "0.5rem", width: "8rem", height: "3.4rem", fontSize: "1rem", backgroundColor: "#3887A6"}}
                    endIcon={<SendIcon>send</SendIcon>}
                    onClick={sendMessage}
                  >
                    보내기
                  </Button>
                </Grid>
                <Grid container item xs={12} justifyContent="center" sx={{ flexDirection: "row", margin: "0rem auto" }}>
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert severity="success" variant="filled" onClose={handleClose} severity="success">
                      인증 번호가 전송되었습니다!
                    </Alert>
                  </Snackbar>
                </Grid>
                <Grid container item xs={6} justifyContent="center" sx={{ flexDirection: "row", margin: "0rem auto" }}>
                  <TextField 
                    required
                    label="인증 번호 입력" 
                    variant="outlined"
                    sx={{margin: "0.5rem", width: "16rem"}}
                    helperText="인증 번호를 입력해주세요"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{margin: "0.5rem", width: "8rem", height: "3.4rem", fontSize: "1rem", backgroundColor: "#3887A6"}}
                  >
                    확인
                  </Button>
                  <Grid container item xs={12} justifyContent="center" sx={{ flexDirection: "row", margin: "0rem auto" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{margin: "0.5rem", width: "25rem", height: "3.4rem", fontSize: "1rem", backgroundColor: "#1B7EA6"}}
                    >
                      계좌 등록하기!
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </register>
        </Container>
        <Footer title="Hippy" description="Hippy" />
      </React.Fragment>
    </Link>
  );
}

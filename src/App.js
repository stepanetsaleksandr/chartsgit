import { Box, Paper, Stack, Container } from "@mui/material";
import MyChart from "./components/MyChart";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box sx={{ margin: "5px" }}>
      <Container maxWidth='sm' sx={{ padding: "30px" }}>
        <Stack spacing={2}>
          <Item elevation={7} sx={{ padding: "30px" }}>
            <MyChart />
          </Item>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;

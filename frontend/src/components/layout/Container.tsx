import { Container as ContainerEl, Paper } from "@mui/material";

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Container = ({ children }: ContainerProps) => {
  return (
    <ContainerEl
      component="main"
      sx={{
        width: { xs: "95%", md: "80%", lg: "60%" },
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <Paper elevation={2} sx={{ padding: "1.5rem" }}>
        {children}
      </Paper>
    </ContainerEl>
  );
};

export default Container;

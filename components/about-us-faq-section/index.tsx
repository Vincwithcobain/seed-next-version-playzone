import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Container
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, textAlign: "center" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Container>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AboutUsFAQ() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ my: 4 }}>
      <Box
        sx={{
          bgcolor: "#ecf9f3",
          width: "50%",
          mx: "auto",
          color: "white",
          py: 1,
        }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Төсөл хэрэгжүүлэгчид" {...a11yProps(0)}></Tab>
          <Tab label="Төсөл дэмжигчид" {...a11yProps(1)}></Tab>
          <Tab label="Ерөнхий" {...a11yProps(2)}></Tab>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {" "}
        Хэрхэн төслөө постлох вэ?
      </TabPanel>
      <TabPanel value={value} index={1}>
        {" "}
        Төсөл хэрэгжүүлэгч төслөө хэрэгжүүлээгүй тохиолдолд Seed.mn юу хийх вэ?
      </TabPanel>
      <TabPanel value={value} index={2}>
        {" "}
        Better Research, Better Design, Better Results
      </TabPanel>
    </Box>
  );
}

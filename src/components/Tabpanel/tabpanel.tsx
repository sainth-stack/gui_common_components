import React from "react";
import { forwardRef } from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { StyledTabpanel } from "./styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

export interface Tab {
  id: number;
  name: string;
}
interface ITabpanelProps {
  children?: any;
  labelKey?: string;
  itemKey?: string;
  activeTab?: Array<any>;
  setActiveTab?: (tab: Tab) => void;
  sx?: any;
  textColor: "primary";
  variant: "scrollable" | "standard";
  tabs?:Array<Tab>
}

const TabPanel = forwardRef(
  (
    {
      textColor = "primary",
      variant = "standard",
      children,
      sx,
      ...other
    }: ITabpanelProps,
    ref
  ) => {
    const theme = useTheme();
    const [alignment, setAlignment] = React.useState("");
    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      alignment: string
    ) => {
      setAlignment(alignment);
    };
console.log(children)
    return (
      <StyledTabpanel
        component="span"
        ownerState={{ textColor, variant }}
        sx={{
          ...sx,
        }}
        theme={theme}
        {...other}
      >
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: variant === "scrollable" ? 224 : "max-content",
          }}
        >
          <Tabs orientation="vertical" variant={variant}>
            {other.tabs?.map((item:any) => {
              return (
                <Box sx={{ pr: 4 }}>
                  {" "}
                  <ToggleButtonGroup
                    sx={{ pl: 4 }}
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                  >
                    <ToggleButton value={item.name}>{item.name}</ToggleButton>{" "}
                  </ToggleButtonGroup>{" "}
                </Box>
              );
            })}
          </Tabs>
        </Box>
      </StyledTabpanel>
    );
  }
);

export default TabPanel;

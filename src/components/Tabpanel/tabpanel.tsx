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
  name: string;
  id:number;
  active:boolean;

}
interface ITabpanelProps {
  children?: any;
  labelKey?: string;
  itemKey?: string;
  activeTab?: Array<any>;
  setActiveTab?: (item: Tab) => void;
  onClick?:()=>void;
  handleTab?:(item: Tab) => void;
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
      setActiveTab = () => {/* */},
      handleTab=() => {},
      onClick=()=>{},    
      sx,
      tabs=[],
      ...other
    }: ITabpanelProps,
    ref
  ) => {
    const theme = useTheme();
    const [alignment, setAlignment] = React.useState(tabs[0].name);
    
    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      alignment: string,
      ) => {
      setAlignment(alignment);
    };
    return (
      <StyledTabpanel
        component="span"
        ownerState={{ textColor, variant }}
        sx={{
          ...sx,
        }}
        theme={theme}
        {...other}
        defaultChecked
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
            {tabs?.map((item:any,index) => {
              return (
                <Box sx={{ pr: 4 }}>
                  {" "}
                  <ToggleButtonGroup
                    sx={{ pl: 4 }}
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    onClick={() =>handleTab(item)}
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

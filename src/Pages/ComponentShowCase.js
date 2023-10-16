import React from "react";

import Accordion from "../components/Accordion/Accordion";
import Badges from "../components/Badges/Badges";
import Cards from "../components/Cards/Cards";
import Dropdown from "../components/Dropdown/Dropdown";
import Input from "../components/Input/Input";
import MultuSelectDropdown from "../components/Multi Select Dropdown/MultuSelectDropdown";
import Progress from "../components/Progress/Progress";
import RangeSlider from "../components/RangeSlider.js/RangeSlider";
import Tables from "../components/Table/Tables";
import Tabs from "../components/Tabs/Tabs";
import Toast from "../components/Toast/Toast";
import Typography from "../components/Typography/Typography";
import AvatarDemo from "../DemoComponents/AvatarDemo";
import ButtonDemo from "../DemoComponents/ButtonDemo";

const ComponentShowCase = () => {
  return (
    <div>
      <ButtonDemo />
      <Tabs />
      <Typography />
      <Badges />
      <Cards />
      <Accordion />
      <RangeSlider />
      {/* <Progress/> */}
      <AvatarDemo />
      <Input />
      <Dropdown />
      <MultuSelectDropdown />
      <Toast />
      <Tables />
    </div>
  );
};

export default ComponentShowCase;

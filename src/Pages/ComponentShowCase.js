import React from "react";

import Accordion from "../components/Accordion/Accordion";
import Input from "../components/Input/Input";
import Tables from "../components/Table/Tables";
import Tabs from "../components/Tabs/Tabs";
import AvatarDemo from "../DemoComponents/AvatarDemo";
import ButtonDemo from "../DemoComponents/ButtonDemo";
import BadgeDemo from "../DemoComponents/BadgeDemo";
import CardsDemo from "../DemoComponents/CardDemo";
import ToastDemo from "../DemoComponents/ToastMessageDemo";
import DropdownDemo from "../DemoComponents/DropDown/DropDownDemo";
import MultiSelectDropDownDemo from "../DemoComponents/DropDown/MultiDropDownDemo";
import ProgressDemo from "../DemoComponents/ProgressDemo";
import RangeSlidersDemo from "../DemoComponents/RangeSlidersDemo";
import TypographyDemo from "../DemoComponents/TypograhpyDemo";

const ComponentShowCase = () => {
  return (
    <div>
      <ButtonDemo />
      <Tabs />
      <TypographyDemo />
      <BadgeDemo />
      <CardsDemo />
      <Accordion />
      <RangeSlidersDemo />
      <ProgressDemo />
      <AvatarDemo />
      <Input />
      <DropdownDemo />
      <MultiSelectDropDownDemo />
      <ToastDemo />
      <Tables />
    </div>
  );
};

export default ComponentShowCase;

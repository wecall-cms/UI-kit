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
import AccordionDemo from "../DemoComponents/AccordionDemo";
import TabsDemo from "../DemoComponents/TabsDemo";
import InputDemo from "../DemoComponents/InputDemo";
import TablesDemo from "../DemoComponents/TablesDemo";

const ComponentShowCase = () => {
  return (
    <div>
      <ButtonDemo />
      <TabsDemo />
      <TypographyDemo />
      <BadgeDemo />
      <CardsDemo />
      <AccordionDemo />
      <RangeSlidersDemo />
      <ProgressDemo />
      <AvatarDemo />
      <InputDemo />
      <DropdownDemo />
      <MultiSelectDropDownDemo />
      <ToastDemo />
      <TablesDemo />
    </div>
  );
};

export default ComponentShowCase;

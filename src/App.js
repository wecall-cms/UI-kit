import "./App.css";
import AppLayout from "./pages/AppLayout";
import Accordion from "./components/Accordion/Accordion";
import Avatar from "./components/Avatar/Avatar";
import Badges from "./components/Badges/Badges";
import Button from "./components/Buttons/Button";
import Cards from "./components/Cards/Cards";
import Dropdown from "./components/Dropdown/Dropdown";
import Input from "./components/Input/Input";
import MultuSelectDropdown from "./components/Multi Select Dropdown/MultuSelectDropdown";
import Progress from "./components/Progress/Progress";
import RangeSlider from "./components/RangeSlider.js/RangeSlider";
import Tables from "./components/Table/Tables";
import Tabs from "./components/Tabs/Tabs";
import Toast from "./components/Toast/Toast";
import Typography from "./components/Typography/Typography";

function App() {
  return (
    <AppLayout>
      <div>
        <Button />
        <Tabs />
        <Typography />
        <Badges />
        <Cards />
        <Accordion />
        <RangeSlider />
        {/* <Progress/> */}
        <Avatar />
        <Input />
        <Dropdown />
        <MultuSelectDropdown />
        <Toast />
        <Tables />
      </div>
    </AppLayout>
  );
}

export default App;

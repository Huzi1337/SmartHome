import { useState } from "react";
import { Select } from "@mantine/core";
import "./Dropdown.scss";

type Props = {
  data: string[];
  placeholder?: string;
};

const Dropdown = ({ data, placeholder = "" }: Props) => {
  const initial = placeholder ? "" : data[0];
  const [selected, setSelected] = useState<string | null>(initial);

  return (
    <Select
      data={data}
      rightSection={<img src="/icons/arrowDown.svg" alt="Arrow Down" />}
      placeholder={placeholder}
      value={selected}
      onChange={(value: string | null) => setSelected(value)}
      readOnly
    />
  );
};

export default Dropdown;

import { useState } from "react";

export default function useControlledComponent(init = "") {
  const [name, setName] = useState(init);

  const nameChange = (e) => setName(e.target.value);

  return [name, nameChange, setName];
}

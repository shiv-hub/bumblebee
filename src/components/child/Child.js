import { UserContext } from "components/parent/Parent";
import React, { useContext } from "react";

export default function Child() {
  const username = useContext(UserContext);
  return <div>Child Component Hey {username}</div>;
}

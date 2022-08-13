import Child from "components/child/Child";
import React, { createContext } from "react";
export const UserContext = createContext(null);
export default function Parent() {
  const username = "Shiv Munda";
  return (
    <UserContext.Provider value={username}>
      {/* <div>Parent Component</div> */}
      <Child />
    </UserContext.Provider>
  );
}

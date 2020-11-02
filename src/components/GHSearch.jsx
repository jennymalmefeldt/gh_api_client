import React, { useState, useEffect } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

const GHSearch = () => {
  const [search, setSearch] = useState([]);
  let response = response
  
  useEffect(() => {
    fetchName();
  }, []);

  const fetchName = async () => {
    response = await axios.get(
      `https://api.github.com/search/users?q=${search}`
    );
    debugger;
  };

  return (
    <>
      <Input type="text" data-cy="username" placeholder="Input GH username" />
      <Button data-cy="search" name="search">
        Search
      </Button>
      <ul data-cy="search-result"></ul>
    </>
  );
};
export default GHSearch;









// import React, { useState, useEffect } from "react";
// import { Button, Input } from "semantic-ui-react";

// // const GHSearch = () => {
const [search, setSearch] = useState("");

// //   setValue = () => {
// //     const results = await axios.get()

// //   }

const fetchName = async () => {
  let response = await axios.get();
};

//   // let itemDisplay = item.map((search) => {

//     return (

//       <>
//       <li>
//         {item.login}
//       </li>
//         <Input type="text" name="search" placeholder="Input GH username" />
//         <Button name="search">
//           Search
//         </Button>
//       </>
//     );
//   });
// };

// export default GHSearch;

import CommentBox from "components/comment-box/CommentBox";
import Parent from "components/parent/Parent";
import useFetch from "customhook/useFetch";
import "./App.css";
// import Home from 'components/home/Home';
// import Form from 'components/SimpleForTest/Form';

const URL = `https://jsonplaceholder.typicode.com/users/2`;
function App() {
  const userDetails = useFetch(URL);
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Form/> */}
      {/* <Parent /> */}
      <CommentBox />

      <h1>Hey There ...! this is App component</h1>
      {userDetails && <h2>{userDetails.name}</h2>}
    </div>
  );
}

export default App;

import axios from "axios";

function App() {
  //Phương thức GET
  function fetchData() {
    // fetch("http://localhost:3000/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    axios.get("http://localhost:3000/posts")
      .then((res) => {
        console.log(res.data);
      })
  }
  fetchData()
  //Phương thức POST
  function postData() {
    // fetch("http://localhost:3000/posts", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     id: 4,
    //     title: "tieu de moi",
    //     views: 1000
    //   })
    // })
    axios.post("http://localhost:3000/posts", {
      data: JSON.stringify({
        id: 4,
        title: "tieu de moi",
        views: 1000
      })
    }).then(() => {
      console.log("Thêm thành công");

    })
  }
  // postData()
  //Phương thức PATCH hoặc PUT

  //Phương thức DELETE
  function deleteData() {
    fetch("http://localhost:3000/posts/1", {
      method: "DELETE"
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }
  // deleteData()
  return (
    <div>App</div>
  )
}

export default App
import './App.css';

function App() {

  const courses = () => {
    fetch('http://localhost:5000/json', {
    method: "GET"
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log('Request failed', err))
  }
  

  return (
    <div className="App">
      <button onClick={courses}>Click to see courses</button>
    </div>
  );
}

export default App;

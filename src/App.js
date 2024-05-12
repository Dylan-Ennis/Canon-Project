import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <div style={{ backgroundColor: 'black', padding: '10px' }}>
//       <h1 style={{color:'#b8860b',margin: '0'}}>Canon</h1>
//       </div>
//       <header className="App-header">
//       </header>
      
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <header style={{  backgroundColor: 'black', position: "sticky", top: "0", zIndex: "999" }}>
        <h1 style={{color: "#b8860b", margin:"0", padding:"10px"}}>Canon</h1>
        </header>
      <div className="App-header"/>
    </div>
  );
}


export default App;
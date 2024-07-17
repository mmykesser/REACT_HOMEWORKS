import Collapse from './components/Collapse.jsx';

function App() {
  const text = 'collapse me';
  return (
    <div className="App">
      <Collapse text={text} opened={false} />
    </div>
  );
}

export default App;

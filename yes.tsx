const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => {
      setData(JSON.stringify(data));
    })
    .catch(error => console.log(error));
  }, []);

  if (!data) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <p>Data:</p>
      <span>
        {
          data.toString()
        }
      </span>
    </div>
  );
};

export default App;

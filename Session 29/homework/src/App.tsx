

function App() {
  //Bai 1
  function testCallback(result: number) {
    console.log(result);
  }
  function calculate(a: number, b: number, callback: (result: number) => void): void {
    callback(a + b)
  }
  // calculate(5, 5, testCallback)

  //Bai 2
  function delayedCallback(callback: () => void, delay: number) {
    setTimeout(() => callback(), delay)
  }
  delayedCallback(() => {
    console.log("delayed callback");
  }, 5000)

  return (
    <div>App</div>
  )
}

export default App
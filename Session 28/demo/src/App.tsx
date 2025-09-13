
function App() {
  // setTimeout(() => {
  //   console.log("Mua rau");
  //   setTimeout(() => {
  //     console.log("Nhặt rau");
  //     setTimeout(() => {
  //       console.log("Rửa rau");
  //       setTimeout(() => {
  //         console.log("Nấu rau");
  //       }, 4000)
  //     }, 1000)
  //   }, 3000)
  // }, 2000)

  const job = (time: number) => {
    return new Promise((resolve) => setTimeout(() => { resolve(10) }, time))
  }
  // job(2000).then(() => {
  //   console.log("Mua rau");
  //   return job(3000)
  // }).then(() => {
  //   console.log("Nhặt rau");
  //   return job(1000)
  // }).then(() => {
  //   console.log("Rửa rau");
  //   return job(4000)
  // }).then(() => {
  //   console.log("Nấu rau");
  // })

  async function run() {
    let result = await job(2000);
    console.log(`${result}: Mua rau`);
    await job(3000);
    console.log("Nhặt rau");
    await job(1000);
    console.log("Rửa rau");
    await job(4000);
    console.log("Nấu rau");
  }
  run()
  return (
    <div>App</div>
  )
}

export default App
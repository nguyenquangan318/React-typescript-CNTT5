import { useEffect, useRef, useState } from "react"

interface Props {
    name: string
    age: number
}

function FunctionalComponent({ name, age }: Props) {
    const [count, setCount] = useState(0);
    // const [check, setCheck] = useState(false)
    const ref = useRef(0)
    ref.current++;
    useEffect(() => {
        console.log("Use effect được chạy");
        return () => {
        }
    }, [count])
    function handleClick() {
        setCount((prevCount) => prevCount + 1)
    }
    return (
        <>
            <h3>FunctionalComponent</h3>
            <h5>Hello, {name}, you are {age} tuổi</h5>
            <p>{count}</p>
            <button onClick={handleClick}>Increase</button>
        </>
    )
}

export default FunctionalComponent
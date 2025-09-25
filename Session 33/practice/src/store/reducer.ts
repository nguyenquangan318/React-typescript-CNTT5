interface userTypes {
    id: number;
    name: string;
    gender: string;
    dateBirth: string;
    address: string;
}

const user= [
    {
        id: 1,
        name: "Nguyen Van a",
        gender: "Nam",
        dateBirth: "1/1/1111",
        address: "abc"
    },
    {
        id: 2,
        name: "Nguyen Van b",
        gender: "nu",
        dateBirth: "2/2/1111",
        address: "hn"
    }
]


type Action = {
    type : string
    payload?: unknown
}
export function reducer(state: userTypes[] = user, action:Action ) {
    return state
}

//B2: Setup redux
//B2.1: Khoi tao state ban dau (kieu du lieu + gia tri)
//B2.2: Xay dung kieu du lieu cho Action
//B2.3: Xay dung ham reducer
//B2.4: Xay dung store

export interface ProductType {
    id: number,
    img: string,
    name: string,
    description: string,
    amount: number,
    price: number
}

const initProducts: ProductType[] = [
    {
        id: 1,
        img: "https://www.pizzaexpress.vn/wp-content/uploads/2018/08/a2-e1533619042175-780x435.jpg",
        name: "Tai nghe Bluetooth",
        description: "Tai nghe không dây chất lượng cao với âm thanh sống động.",
        amount: 10,
        price: 79
    },
    {
        id: 2,
        img: "https://www.pizzaexpress.vn/wp-content/uploads/2018/08/a2-e1533619042175-780x435.jpg",
        name: "Chuột gaming",
        description: "Chuột chơi game với đèn LED RGB và độ chính xác cao.",
        amount: 15,
        price: 55
    },
    {
        id: 3,
        img: "https://www.pizzaexpress.vn/wp-content/uploads/2018/08/a2-e1533619042175-780x435.jpg",
        name: "Bàn phím cơ",
        description: "Bàn phím cơ với switch đỏ, gõ êm và nhạy, gõ êm và nhạy.",
        amount: 8,
        price: 99
    },
    {
        id: 4,
        img: "https://www.pizzaexpress.vn/wp-content/uploads/2018/08/a2-e1533619042175-780x435.jpg",
        name: "Màn hình 24 inch",
        description: "Màn hình Full HD, tần số quét 75Hz, phù hợp làm việc và giải trí.",
        amount: 5,
        price: 28
    }
];

type Action = { type: string, payload?: any }

export function productsReducer(state = initProducts, action: Action) {
    return state
}
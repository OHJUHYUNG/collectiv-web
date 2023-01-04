export interface ProductData {
  id: number;
  userImg: string;
  userId: string;
  time: number;
  productName: string;
  productImg: string;
  quantity: number;
  sub: string;
  price: number;
  watch: number;
  like: number;
  category: number;
}

const data = [
  {
    id: 1,
    category: 8,
    userId: "collectiv",
    userImg: "/images/user.jpeg",
    time: 3,
    productName: "Diesel",
    productImg: "/images/sample1.png",
    sub: "[os] 디젤 니트 비니 블랙",
    price: 64000,
    quantity: 1,
    watch: 345,
    like: 6,
  },
  {
    id: 2,
    category: 6,
    userId: "collectiv",
    userImg: "/images/user.jpeg",
    time: 4,
    productName: "Diesel",
    productImg: "/images/sample2.png",
    sub: "[os] 디젤 니트 비니 블랙",
    price: 54000,
    quantity: 0,
    watch: 245,
    like: 52,
  },
  {
    id: 3,
    category: 2,
    userId: "collectiv",
    userImg: "/images/user.jpeg",
    time: 10,
    productName: "Diesel",
    productImg: "/images/sample3.png",
    sub: "[os] 디젤 니트 비니 블랙",
    price: 1164000,
    quantity: 1,
    watch: 145,
    like: 116,
  },
  {
    id: 4,
    category: 2,
    userId: "collectiv",
    userImg: "/images/user.jpeg",
    time: 17,
    productName: "Diesel",
    productImg: "/images/sample4.png",
    sub: "[os] 디젤 니트 비니 블랙",
    price: 1234000,
    quantity: 1,
    watch: 145,
    like: 111,
  },
  {
    id: 5,
    category: 2,
    userId: "collectiv",
    userImg: "/images/user.jpeg",
    time: 3,
    productName: "Diesel",
    productImg: "/images/sample5.png",
    sub: "[os] 디젤 니트 비니 블랙",
    price: 164000,
    quantity: 0,
    watch: 545,
    like: 65,
  },
  {
    id: 6,
    category: 5,
    userId: "collectiv",
    userImg: "/images/user.jpeg",
    time: 4,
    productName: "Diesel",
    productImg: "/images/sample6.png",
    sub: "[os] 디젤 니트 비니 블랙",
    price: 4354000,
    quantity: 1,
    watch: 24,
    like: 5,
  },
  {
    id: 7,
    category: 5,
    userId: "collectiv",
    userImg: "/images/user.jpeg",
    time: 10,
    productName: "Diesel",
    productImg: "/images/sample7.png",
    sub: "[os] 디젤 니트 비니 블랙",
    price: 2344000,
    watch: 145,
    quantity: 1,
    like: 11,
  },
  {
    id: 8,
    category: 2,
    userId: "collectiv",
    userImg: "/images/user.jpeg",
    time: 17,
    productName: "Diesel",
    productImg: "/images/sample8.png",
    sub: "[os] 디젤 니트 비니 블랙",
    price: 34000,
    quantity: 1,
    watch: 14,
    like: 111,
  },
  {
    id: 9,
    category: 3,
    userId: "collectiv",
    userImg: "/images/user.jpeg",
    time: 4,
    productName: "Pants",
    productImg: "/images/sample9.png",
    sub: "[os] 바지",
    price: 54000,
    quantity: 3,
    watch: 245,
    like: 52,
  },
  {
    id: 10,
    category: 2,
    userId: "collectiv",
    userImg: "/images/user.jpeg",
    time: 10,
    productName: "Diesel",
    productImg: "/images/sample3.png",
    sub: "[os] 디젤 니트 비니 블랙",
    price: 1164000,
    quantity: 1,
    watch: 145,
    like: 116,
  },
  {
    id: 11,
    category: 2,
    userId: "collectiv",
    userImg: "/images/user.jpeg",
    time: 17,
    productName: "Diesel",
    productImg: "/images/sample4.png",
    sub: "[os] 디젤 니트 비니 블랙",
    price: 1234000,
    quantity: 1,
    watch: 145,
    like: 111,
  },
  {
    id: 12,
    category: 2,
    userId: "collectiv",
    userImg: "/images/user.jpeg",
    time: 3,
    productName: "Diesel",
    productImg: "/images/sample5.png",
    sub: "[os] 디젤 니트 비니 블랙",
    price: 164000,
    quantity: 0,
    watch: 545,
    like: 65,
  },
  {
    id: 13,
    category: 5,
    userId: "collectiv",
    userImg: "/images/user.jpeg",
    time: 4,
    productName: "Diesel",
    productImg: "/images/sample6.png",
    sub: "[os] 디젤 니트 비니 블랙",
    price: 4354000,
    quantity: 2,
    watch: 24,
    like: 5,
  },
  {
    id: 14,
    category: 5,
    userId: "collectiv",
    userImg: "/images/user.jpeg",
    time: 10,
    productName: "Diesel",
    productImg: "/images/sample7.png",
    sub: "[os] 디젤 니트 비니 블랙",
    price: 2344000,
    watch: 145,
    quantity: 0,
    like: 11,
  },
  {
    id: 15,
    category: 2,
    userId: "collectiv",
    userImg: "/images/user.jpeg",
    time: 17,
    productName: "Diesel",
    productImg: "/images/sample8.png",
    sub: "[os] 디젤 니트 비니 블랙",
    price: 34000,
    quantity: 0,
    watch: 14,
    like: 111,
  },
];

export async function getProduct(cID: number): Promise<ProductData[]> {
  const returnValue: ProductData[] = [];

  if (cID === 1) {
    return data;
  }

  for (const i in data) {
    if (data[i].category === cID) {
      returnValue.push(data[i]);
    }
  }

  return returnValue;
}

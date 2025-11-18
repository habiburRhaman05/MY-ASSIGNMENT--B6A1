function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  return !value;
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
  return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const status = book.isAvailable ? "Yes" : "No";
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${status}`);
}

function getUniqueValues(
  arrOne: (string | number)[],
  arrTwo: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];

  function existElement(value: string | number): boolean {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arrOne.length; i++) {
    const e = arrOne[i];
    if (!existElement(e)) {
      result.push(e);
    }
  }

  for (let i = 0; i < arrTwo.length; i++) {
    const e = arrTwo[i];
    if (!existElement(e)) {
      result.push(e);
    }
  }

  return result;
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products.reduce((total, product) => {
    let subtotal = product.price * product.quantity;
    if (typeof product.discount === "number") {
      subtotal -= (subtotal * product.discount) / 100;
    }
    return total + subtotal;
  }, 0);
  }

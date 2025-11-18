## Problem Solutions

All solutions are implemented in `solution.ts` file. Each function and class follows the exact requirements specified in the assignment.

## Blogs content 

# 1) TypeScript-এ Interface এবং Type এর মধ্যে পার্থক্য

TypeScript-এ object এর structure define করতে গেলে আমরা সাধারণত দুটি জিনিস ব্যবহার করি — **interface** এবং **type**।  
দেখতে একইরকম মনে হলেও, বাস্তবে এদের behaviour ভিন্ন এবং আলাদা পরিস্থিতিতে আলাদা সুবিধা দেয়।  
এই পোস্টে সহজ ভাষায় তাদের মূল পার্থক্যগুলো তুলে ধরা হলো।

---

## 🔹 Interface — Normal way to define object shapes

`interface` মূলত objects এবং classes-এর structure বোঝানোর জন্য তৈরি।  
Object-oriented design অনুসরণ করলে interface ব্যবহার করা অনেক বেশি clean এবং readable।

```ts
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}
```

➡ এখানে `Admin` খুব সহজেই `User`-কে extend করতে পারছে।  
➡ Extending এর ক্ষেত্রে interface অনেক smooth.

---

## 🔹 Type — More flexible and powerful

`type` alias object ছাড়াও আরও অনেক কিছুর জন্য ব্যবহার করা যায়:

- union type
- tuple
- function type
- primitive alias  
ইত্যাদি।

```ts
type ID = string | number;
```

➡ এই flexibility interface-এ নেই।

---

## 🔹 Interface Automatically Merge হয়, কিন্তু Type Merge হয় না

এটি interface-এর একটি unique সুবিধা।

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
```

উপরের দুটি একসাথে merge হয়ে হবে:

```ts
{ name: string; age: number }
```

কিন্তু একই কাজ type alias দিয়ে করলে error আসবে:

```ts
type User = { name: string };
type User = { age: number }; //  এখানে এরর হবে
```


## ✔ Conclusion

- Interface বেশি readable এবং OOP-friendly  
- Type alias বেশি flexible এবং powerful  

Project-এর nature অনুযায়ী যেটা fit করে, সেটাই ব্যবহার করাই best practice।

---

---

# ## 2) TypeScript-এ any, unknown এবং never এর পার্থক্য

TypeScript-এর তিনটি special type — **any**, **unknown**, এবং **never** — beginners এবং এমনকি professionals দের কাছেও অনেক সময় confusing লাগে।  
কিন্তু এগুলোর উদ্দেশ্য সম্পূর্ণ আলাদা।  
এই পোস্টে খুব সহজ এবং human-friendly উপায়ে তিনটির পার্থক্য ব্যাখ্যা করা হলো।

---

## 🔹 any — সবচেয়ে free এবং সবচেয়ে risky টাইপ

`any` basically TypeScript-এর সব ধরনের type-checking বন্ধ করে দেয়।

```ts
let value: any = "Hello";
value = 10;
value = true;
```

✔ সুবিধা:  
- দ্রুত কোড লেখা যায়  
- কোনো restriction নেই  

❌ সমস্যা:  
- ভুল ধরতে পারে না  
- বড় প্রোজেক্টে প্রচুর bug তৈরি হতে পারে  

➡ যতোটা সম্ভব `any` avoid করা উচিত।

---

## 🔹 unknown — safer alternative of any

`unknown` দেখতে `any`-এর মতো হলেও, এটি অনেক safe।  
Because: value ব্যবহার করার আগে টাইপ check করতে হয়।

```ts
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

✔ সুবিধা:  
- সব value রাখা যায়  
- ভুল টাইপে কিছু ব্যবহার করা যায় না  
- কোড নিরাপদ থাকে  

➡ যখন নিশ্চিত না যে কোন ধরনের data আসবে, তখন `unknown` best choice।

---

## 🔹 never — এমন type যা কখনো return হয় না

`never` সাধারণত দুই ক্ষেত্রে ব্যবহৃত হয়:

### 1) Function throws an error
```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

### 2) Infinite loop
```ts
function loopForever(): never {
  while (true) {}
}
```

➡ অর্থাৎ, program flow এখানে কখনো শেষ হবে না, তাই return value-এর প্রশ্নই নেই।

---

## 🔹 Summery

| টাইপ | মানে | কখন ব্যবহার |
|------|------|-------------|
| **any** | Anything allowed | Quick but unsafe coding |
| **unknown** | Safe but flexible | When type is uncertain |
| **never** | Never returns | Error, infinite loop cases |



------



## ✔ Final Report 

- `any`: fastest but dangerous  
- `unknown`: safe choice for uncertain data  
- `never`: special cases only  


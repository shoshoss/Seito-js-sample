export const test = () => {
	// console.log("test");
	// const name: string = "Mike"; //string
	// console.log(name);
	// const age: number = 25; //number
	// const isStudent: boolean = false; //boolean
	// const hobbies: string[] = ["Reading", "Coding", "Gaming"];
	// const address: object = {
	// 	street: "123 Main St",
	// 	city: "Los Angeles",
	// 	state: "Ca",
	// }; //object
	// const today: Date = new Date(); //date
	// const none: null = null; //null
	// const noDefined: undefined = undefined; //undefined
	// const random: any = "Hello World"; //any
	// const gender: "male" | "female" = "male"; //union
	// const value: string | number | null = "Hello World"; //union
	// //問題：引数に文字列の配列を受け取り、その中身の順番を逆にして返す関数を作成する
	// // 例：reverseArray["a", "b", "c"] => ["c", "b", "a"]
	// // 実際にデータ型を定義してみよう：変数、引数、返り値
	// // オプション引数
	// const reverseArray = (arr: string[], hasTom?: boolean): string[] => {
	// 	const reversedArray: string[] = [];
	// 	let index: number = arr.length - 1;
	// 	while (index >= 0) {
	// 		reversedArray.push(arr[index]);
	// 		index--;
	// 	}
	// 	if (hasTom) {
	// 		reversedArray.push("Tom");
	// 	}
	// 	return reversedArray;
	// };
	// console.log(reverseArray(["a", "b", "c"], true));
	// const reverseArray2 = (arr: string[]): string[] => {
	// 	return arr.reverse();
	// };
	// console.log(reverseArray2(["a", "b", "c", "d"]));
	// const user = {
	// 	userId: 1,
	// 	name: "Mike",
	// 	age: 25,
	// 	email: "maike@gmail.com",
	// 	isActive: true,
	// };
	// interface UserProps {
	// 	userId: number;
	// 	name: string;
	// 	age: number;
	// 	email: string;
	// 	isActive: boolean;
	// }
	// interface AdminUserProps extends UserProps {
	// 	role: string; //"admin", "leader", "manager"
	// }
	// type UserProps = {
	// 	userId: number;
	// 	name: string;
	// 	age: number;
	// 	email: string;
	// 	isActive: boolean;
	// };
	// type AdminUserProps = UserProps & {
	// 	role: string; //"admin", "leader", "manager"
	// };
	// const createAccount = (accountInfo: AdminUserProps) => {
	// 	//
	// };
	// createAccount({
	// 	userId: 1,
	// 	name: "Mike",
	// 	age: 25,
	// 	email: "maike@gmail.com",
	// 	isActive: true,
	// 	role: "admin",
	// });
	// class User {
	// 	userId: number;
	// 	name: string;
	// 	age: number;
	// 	email: string;
	// 	isActive: boolean;
	// 	constructor(
	// 		userId: number,
	// 		name: string,
	// 		age: number,
	// 		email: string,
	// 		isActive: boolean
	// 	) {
	// 		this.userId = userId;
	// 		this.name = name;
	// 		this.age = age;
	// 		this.email = email;
	// 		this.isActive = isActive;
	// 	}
	// 	private getProfile(): string {
	// 		return `Name: ${this.name}, Age: ${this.age}`;
	// 	}
	// 	static sayHelloWord(): void {
	// 		console.log("Hello World");
	// 	}
	// }
	// const user = new User(1, "Mike", 25, "mike@gmail.com", true);
	// User.sayHelloWord();
	// user.getProfile();
	// public, private, protected

	// const foo = (arg: string): string => {
	// 	return arg;
	// };

  const foo = <T>(arg: T) T => {
    return arg;
  }

  foo<string>("Hello World")
};

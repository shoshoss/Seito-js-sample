export const test = () => {
	console.log("test");

	const name: string = "Mike"; //string
	console.log(name);
	const age: number = 25; //number
	const isStudent: boolean = false; //boolean
	const hobbies: string[] = ["Reading", "Coding", "Gaming"];
	const address: object = {
		street: "123 Main St",
		city: "Los Angeles",
		state: "Ca",
	}; //object
	const today: Date = new Date(); //date
	const none: null = null; //null
	const noDefined: undefined = undefined; //undefined
	const random: any = "Hello World"; //any
	const gender: "male" | "female" = "male"; //union
	const value: string | number | null = "Hello World"; //union

	//問題：引数に文字列の配列を受け取り、その中身の順番を逆にして返す関数を作成する
	// 例：reverseArray["a", "b", "c"] => ["c", "b", "a"]
	const reverseArray = (arr: string[]): string[] => {
		const reversedArray: string[] = [];

		let index: number = arr.length - 1;
		while (index >= 0) {
			reversedArray.push(arr[index]);
			index--;
		}
		return reversedArray;
	};

	console.log(reverseArray(["a", "b", "c"]));

	const reverseArray2 = (arr: string[]): string[] => {
		return arr.reverse();
	};
	console.log(reverseArray2(["a", "b", "c", "d"]));
};

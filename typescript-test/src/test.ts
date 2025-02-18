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
};

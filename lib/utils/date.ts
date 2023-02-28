export interface DateMY {
	month: string | number;
	year: number;
}

export interface FullDate {
	day: number;
	month: string | number;
	year: number;
}

interface MonthIdentifiers {
	name: string;
	abbreviation: string;
	number: number;
}

const CompleteMonths: { [month: string]: MonthIdentifiers } = {
	January: {
		name: "January",
		abbreviation: "Jan",
		number: 1,
	},
	February: {
		name: "February",
		abbreviation: "Feb",
		number: 2,
	},
	March: {
		name: "March",
		abbreviation: "Mar",
		number: 3,
	},
	April: {
		name: "April",
		abbreviation: "Apr",
		number: 4,
	},
	May: {
		name: "May",
		abbreviation: "May",
		number: 5,
	},
	June: {
		name: "June",
		abbreviation: "Jun",
		number: 6,
	},
	July: {
		name: "July",
		abbreviation: "Jul",
		number: 7,
	},
	August: {
		name: "August",
		abbreviation: "Aug",
		number: 8,
	},
	September: {
		name: "September",
		abbreviation: "Sept",
		number: 9,
	},
	October: {
		name: "October",
		abbreviation: "Oct",
		number: 10,
	},
	November: {
		name: "November",
		abbreviation: "Nov",
		number: 11,
	},
	December: {
		name: "December",
		abbreviation: "Dec",
		number: 12,
	},
};

export function convertMonth<T extends string | number, U extends keyof MonthIdentifiers>(
	curr: T,
	conv: U
) {
	let conversion: string | number = curr;
	let match = false;

	for (let month of Object.keys(CompleteMonths)) {
		if (typeof curr === "string") {
			match =
				curr.toLowerCase() === CompleteMonths[month].name.toLowerCase() ||
				curr.toLowerCase() === CompleteMonths[month].abbreviation.toLowerCase()
					? true
					: false;
		} else {
			match = curr == CompleteMonths[month].number ? true : false;
		}

		if (match) {
			conversion = CompleteMonths[month][conv];
			break;
		}
	}

	return conversion;
}

export function formatDateStrMonths<T extends string, U extends keyof MonthIdentifiers>(
	curr: T,
	conv: U,
	delimit: string = " "
) {
	let dateString = curr.split(delimit);

	function convert(num: number): string {
		let substr = dateString[num];
		let converted: string | number = " ";
		let isNum = Number.isInteger(Number.parseInt(substr));

		converted +=
			(isNum && substr.length > 2) || substr.length < 3
				? substr
				: convertMonth(substr, conv) ?? "";
		if (num === 0) return converted.toString();
		return convert(num - 1) + converted.toString();
	}

	return convert(dateString.length - 1);
}

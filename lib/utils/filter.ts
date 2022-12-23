interface FilterableObject {
	name: string;
}
export function filter<T extends FilterableObject>(query: string, matches: Array<T>): Array<T> {
	return query === ""
		? matches
		: matches.filter((item) => {
				let matchedLetters = 0;
				let highestSubmatch = 0;
				let name = item.name;

				const nameWords = name.split(" ").map((word: string) => word.toLowerCase());
				const multiwordName = nameWords?.length > 1;

				if (multiwordName && nameWords.includes(query.toLowerCase()) && query?.length <= name?.length) return true;

				for (const word of multiwordName ? nameWords : [name]) {
					for (let i = 0; i < query.length; i++) {
						if (i < word.length && query[i].toLowerCase() === word[i].toLowerCase()) matchedLetters++;

						if (multiwordName) {
							if (i === word?.length || i + 1 === query?.length) {
								let avg = matchedLetters / i;
								if (query?.length <= name?.length) {
									if (avg > highestSubmatch) highestSubmatch = avg;
								} else {
									let percentDiff = (name.length + (name?.length - query?.length)) / name.length;
									highestSubmatch *= percentDiff;
								}
							}
						}
					}
				}

				const matchScore = multiwordName ? highestSubmatch : matchedLetters / query.length;

				if (query.length >= 4) {
					return query.length >= 4 && matchScore >= 0.7;
				}

				return name.toLowerCase().includes(query.toLowerCase());
		  });
}

import { InputOperator, Result } from './types';

export const getNumber = (string: string): number => {
	return +string.substring(1);
};

export const getOperation = (string: string, number: number): number => {
	switch (string.substring(0, 1)) {
		case '/':
			return number / getNumber(string);
			break;
		case '*':
			return number * getNumber(string);
			break;
		case '-':
			return number - getNumber(string);
			break;
		case '+':
			return number + getNumber(string);
			break;
		default:
			return number;
	}
};

export const operate = (
	operator: InputOperator,
	numberA: number,
	numberB: number
): Result => {
	const result = { A: 0, B: 0 };
	result.A = getOperation(operator.A, numberA);
	result.B = getOperation(operator.B, numberB);
	return result;
};

export const calculate = (
	inputNumber: string,
	operatorsArray: InputOperator[],
	outputA: string,
	outputB: string
): string[] => {
	let success = false;
	const resultOperators: string[] = [];
	let resultA = +inputNumber;
	let resultB = +inputNumber;

	const resetResult = () => {
		resultA = +inputNumber;
		resultB = +inputNumber;
	};
	// const operandA = +resultA;
	// const operandB = +resultB;

	// 1
	for (let i = 0; i < operatorsArray.length; i++) {
		const result = operate(operatorsArray[i], resultA, resultB);
		if (+outputA == result.A && +outputB == result.B) {
			success = true;
			resultOperators.push(operatorsArray[i].number);
		} else {
			resetResult();
		}
	}

	// 2
	if (!success) {
		for (let i = 0; i < operatorsArray.length; i++) {
			for (let j = i + 1; j < operatorsArray.length; j++) {
				let result = operate(operatorsArray[i], resultA, resultB);
				result = operate(operatorsArray[j], result.A, result.B);

				if (+outputA == result.A && +outputB == result.B) {
					success = true;
					resultOperators.push(operatorsArray[i].number);
					resultOperators.push(operatorsArray[j].number);
				} else {
					resetResult();
				}
			}
		}
	}

	// 3
	if (!success) {
		for (let i = 0; i < operatorsArray.length; i++) {
			for (let j = i + 1; j < operatorsArray.length; j++) {
				for (let k = j + 1; k < operatorsArray.length; k++) {
					let result = operate(operatorsArray[i], resultA, resultB);
					result = operate(operatorsArray[j], result.A, result.B);
					result = operate(operatorsArray[k], result.A, result.B);

					if (+outputA == result.A && +outputB == result.B) {
						success = true;
						resultOperators.push(operatorsArray[i].number);
						resultOperators.push(operatorsArray[j].number);
						resultOperators.push(operatorsArray[k].number);
					} else {
						resetResult();
					}
				}
			}
		}
	}

	// 4
	if (!success) {
		for (let i = 0; i < operatorsArray.length; i++) {
			for (let j = i + 1; j < operatorsArray.length; j++) {
				for (let k = j + 1; k < operatorsArray.length; k++) {
					for (let l = k + 1; l < operatorsArray.length; l++) {
						let result = operate(operatorsArray[i], resultA, resultB);
						result = operate(operatorsArray[j], result.A, result.B);
						result = operate(operatorsArray[k], result.A, result.B);
						result = operate(operatorsArray[l], result.A, result.B);

						if (+outputA == result.A && +outputB == result.B) {
							success = true;
							resultOperators.push(operatorsArray[i].number);
							resultOperators.push(operatorsArray[j].number);
							resultOperators.push(operatorsArray[k].number);
							resultOperators.push(operatorsArray[l].number);
						} else {
							resetResult();
						}
					}
				}
			}
		}
	}

	// 5
	if (!success) {
		for (let i = 0; i < operatorsArray.length; i++) {
			for (let j = i + 1; j < operatorsArray.length; j++) {
				for (let k = j + 1; k < operatorsArray.length; k++) {
					for (let l = k + 1; l < operatorsArray.length; l++) {
						for (let q = l + 1; q < operatorsArray.length; q++) {
							let result = operate(operatorsArray[i], resultA, resultB);
							result = operate(operatorsArray[j], result.A, result.B);
							result = operate(operatorsArray[k], result.A, result.B);
							result = operate(operatorsArray[l], result.A, result.B);
							result = operate(operatorsArray[q], result.A, result.B);

							if (+outputA == result.A && +outputB == result.B) {
								success = true;
								resultOperators.push(operatorsArray[i].number);
								resultOperators.push(operatorsArray[j].number);
								resultOperators.push(operatorsArray[k].number);
								resultOperators.push(operatorsArray[l].number);
								resultOperators.push(operatorsArray[q].number);
							} else {
								resetResult();
							}
						}
					}
				}
			}
		}
	}

	// 6
	if (!success) {
		for (let i = 0; i < operatorsArray.length; i++) {
			for (let j = i + 1; j < operatorsArray.length; j++) {
				for (let k = j + 1; k < operatorsArray.length; k++) {
					for (let l = k + 1; l < operatorsArray.length; l++) {
						for (let q = l + 1; q < operatorsArray.length; q++) {
							for (let w = q + 1; w < operatorsArray.length; w++) {
								let result = operate(operatorsArray[i], resultA, resultB);
								result = operate(operatorsArray[j], result.A, result.B);
								result = operate(operatorsArray[k], result.A, result.B);
								result = operate(operatorsArray[l], result.A, result.B);
								result = operate(operatorsArray[q], result.A, result.B);
								result = operate(operatorsArray[w], result.A, result.B);

								if (+outputA == result.A && +outputB == result.B) {
									success = true;
									resultOperators.push(operatorsArray[i].number);
									resultOperators.push(operatorsArray[j].number);
									resultOperators.push(operatorsArray[k].number);
									resultOperators.push(operatorsArray[l].number);
									resultOperators.push(operatorsArray[q].number);
									resultOperators.push(operatorsArray[w].number);
								} else {
									resetResult();
								}
							}
						}
					}
				}
			}
		}
	}

	// 7
	if (!success) {
		for (let i = 0; i < operatorsArray.length; i++) {
			for (let j = i + 1; j < operatorsArray.length; j++) {
				for (let k = j + 1; k < operatorsArray.length; k++) {
					for (let l = k + 1; l < operatorsArray.length; l++) {
						for (let q = l + 1; q < operatorsArray.length; q++) {
							for (let w = q + 1; w < operatorsArray.length; w++) {
								for (let e = w + 1; e < operatorsArray.length; e++) {
									let result = operate(operatorsArray[i], resultA, resultB);
									result = operate(operatorsArray[j], result.A, result.B);
									result = operate(operatorsArray[k], result.A, result.B);
									result = operate(operatorsArray[l], result.A, result.B);
									result = operate(operatorsArray[q], result.A, result.B);
									result = operate(operatorsArray[w], result.A, result.B);
									result = operate(operatorsArray[e], result.A, result.B);

									if (+outputA == result.A && +outputB == result.B) {
										success = true;
										resultOperators.push(operatorsArray[i].number);
										resultOperators.push(operatorsArray[j].number);
										resultOperators.push(operatorsArray[k].number);
										resultOperators.push(operatorsArray[l].number);
										resultOperators.push(operatorsArray[q].number);
										resultOperators.push(operatorsArray[w].number);
										resultOperators.push(operatorsArray[e].number);
									} else {
										resetResult();
									}
								}
							}
						}
					}
				}
			}
		}
	}

	// 8
	if (!success) {
		for (let i = 0; i < operatorsArray.length; i++) {
			for (let j = i + 1; j < operatorsArray.length; j++) {
				for (let k = j + 1; k < operatorsArray.length; k++) {
					for (let l = k + 1; l < operatorsArray.length; l++) {
						for (let q = l + 1; q < operatorsArray.length; q++) {
							for (let w = q + 1; w < operatorsArray.length; w++) {
								for (let e = w + 1; e < operatorsArray.length; e++) {
									for (let r = e + 1; r < operatorsArray.length; r++) {
										let result = operate(operatorsArray[i], resultA, resultB);
										result = operate(operatorsArray[j], result.A, result.B);
										result = operate(operatorsArray[k], result.A, result.B);
										result = operate(operatorsArray[l], result.A, result.B);
										result = operate(operatorsArray[q], result.A, result.B);
										result = operate(operatorsArray[w], result.A, result.B);
										result = operate(operatorsArray[e], result.A, result.B);
										result = operate(operatorsArray[r], result.A, result.B);

										if (+outputA == result.A && +outputB == result.B) {
											success = true;
											resultOperators.push(operatorsArray[i].number);
											resultOperators.push(operatorsArray[j].number);
											resultOperators.push(operatorsArray[k].number);
											resultOperators.push(operatorsArray[l].number);
											resultOperators.push(operatorsArray[q].number);
											resultOperators.push(operatorsArray[w].number);
											resultOperators.push(operatorsArray[e].number);
											resultOperators.push(operatorsArray[r].number);
										} else {
											resetResult();
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}

	return resultOperators;
};

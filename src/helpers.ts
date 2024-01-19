/* eslint-disable no-unreachable */
export const getNumber = (string) => {
	return +string.substring(1);
};

export const getOperation = (string, number) => {
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

export const operate = (operator, number) => {
	return getOperation(operator.A, number);
};

export const calculate = (
	operatorsArray,
	outputA,
	resultA,
	outputB,
	resultB,
	resetResult
) => {
	let success = false;
	const resultOperators = [];
	// 1
	for (let i = 0; i < operatorsArray.length; i++) {
		operate(operatorsArray[i]);
		if (outputA == resultA && outputB == resultB) {
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
				operate(operatorsArray[i]);
				operate(operatorsArray[j]);

				if (outputA == resultA && outputB == resultB) {
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
					operate(operatorsArray[i]);
					operate(operatorsArray[j]);
					operate(operatorsArray[k]);

					if (outputA == resultA && outputB == resultB) {
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
						operate(operatorsArray[i]);
						operate(operatorsArray[j]);
						operate(operatorsArray[k]);
						operate(operatorsArray[l]);

						if (outputA == resultA && outputB == resultB) {
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
							operate(operatorsArray[i]);
							operate(operatorsArray[j]);
							operate(operatorsArray[k]);
							operate(operatorsArray[l]);
							operate(operatorsArray[q]);

							if (outputA == resultA && outputB == resultB) {
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
								operate(operatorsArray[i]);
								operate(operatorsArray[j]);
								operate(operatorsArray[k]);
								operate(operatorsArray[l]);
								operate(operatorsArray[q]);
								operate(operatorsArray[w]);

								if (outputA == resultA && outputB == resultB) {
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
									operate(operatorsArray[i]);
									operate(operatorsArray[j]);
									operate(operatorsArray[k]);
									operate(operatorsArray[l]);
									operate(operatorsArray[q]);
									operate(operatorsArray[w]);
									operate(operatorsArray[e]);

									if (outputA == resultA && outputB == resultB) {
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
										operate(operatorsArray[i]);
										operate(operatorsArray[j]);
										operate(operatorsArray[k]);
										operate(operatorsArray[l]);
										operate(operatorsArray[q]);
										operate(operatorsArray[w]);
										operate(operatorsArray[e]);
										operate(operatorsArray[r]);

										if (outputA == resultA && outputB == resultB) {
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

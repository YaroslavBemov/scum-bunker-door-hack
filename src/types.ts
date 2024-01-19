export interface InitialState {
	inputNumber: string;
	outputA: string;
	outputB: string;
	inputOperator1: InputOperator;
	inputOperator2: InputOperator;
	inputOperator3: InputOperator;
	inputOperator4: InputOperator;
	inputOperator5: InputOperator;
	inputOperator6: InputOperator;
	inputOperator7: InputOperator;
	inputOperator8: InputOperator;
	resultA: string;
	resultB: string;
}

export interface InputOperator {
	A: string;
	B: string;
	number: string;
}

import React from "react";

interface Props {
    amount: number
    type: string
    textColor: string
    backgroundColor: string
    
}

const Transactions = (props: Props) => {
	return (
		<div className={`box-border p-2 rounded-lg ${props.backgroundColor}`}>
			<h1 className="font-medium">{props.type} tokens</h1>
			<h1 className={`font-medium ${props.textColor}`}>Amount: {props.amount}</h1>
		</div>
	);
};

export default Transactions;

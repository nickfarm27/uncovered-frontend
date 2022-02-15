import React, { useContext, useEffect, useRef, useState } from "react";
import Dividers from "@mui/material/Divider";
import Transactions from "./Transactions";
import BlueButton from "../../../ui/BlueButton";
import axios from "axios";
import UserContext from "../../../../store/user-context";
import { motion } from "framer-motion";

interface Props {}

const WalletView = (props: Props) => {
	const userCtx = useContext(UserContext);
	const submitHandler = () => {
		console.log("Wallet");
	};

	const [currencies, setcurrencies] = useState([])
	const [price, setprice] = useState('0.00')
	const [pastData, setpastData] = useState([])
	const ws = useRef(false)
	const url = 'https//api.pro.coinbase.com'

	const [wallet, setWallet] = useState(0);

	const fetchWallet = async () => {
		if (userCtx.user) {
			try {
				const response = await axios.get(
					`http://localhost:3030/blockchain/account/${userCtx.user.address}`
				);
				if (response.data.xpxAmount) {
					setWallet(response.data.xpxAmount);
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		setTimeout(() => fetchWallet(), 1000);
	}, [userCtx.user]);

	console.log(wallet);
	return (
		<div className="flex w-full h-full p-6 gap-x-8 ">
			<div className="flex flex-col w-1/2 gap-y-8 ">
				{/* First Box */}
				<div className="box-border bg-zinc-100 w-full drop-shadow-lg rounded-xl p-6 ">
					<div className="flex justify-between">
						<h1 className="font-semibold text-lg pb-2">
							Wallet Balance
						</h1>
					</div>
					<Dividers />

					<div className="flex gap-x-24 items-center pt-4">
						<div className="flex flex-col justify-between">
							<h1 className="font-medium pb-2 ">Total Balance</h1>
							<h1 className="font-medium pb-2 ">
								{wallet} XPX Tokens
							</h1>
							<h1 className="font-semibold pb-6 text-3xl">
								RM420.69
							</h1>

							<motion.button
								whileHover={{ scale: 1.03 }}
								className=" bg-blue-600 rounded-lg "
							>
								<h1 className="font-medium p-4 text-white text-xs">{`XPX Private Key: ${
									userCtx.user && userCtx.user.address
								}`}</h1>
							</motion.button>
						</div>
					</div>
				</div>

				{/* Second Box */}
				<div className="box-border bg-zinc-100 w-full drop-shadow-lg rounded-xl p-6 ">
					<div className="">
						<h1 className="font-semibold text-lg pb-2">
							ProximaX Price (XPX)
						</h1>
					</div>
					<Dividers />

					<div className="flex gap-x-12 items-start pt-4 ">
						<div className="flex flex-col gap-y-6  w-1/2  ">
							<div className="flex flex-col ">
								<h1 className="font-medium pb-2 ">
									United State Dollars (USD)
								</h1>
								<h1 className="font-semibold pb-2 text-3xl">
									$0.0000017
								</h1>
							</div>

							<div className="flex flex-col ">
								<h1 className="font-medium pb-2 ">
									Malaysian Ringgit (MYR)
								</h1>
								<h1 className="font-semibold pb-2 text-3xl">
									RM0.0000054
								</h1>
							</div>
						</div>

						<div className="flex flex-col  w-1/2  items-center justify-between">
							<h1 className="font-medium pb-2 ">
								Changes in 24hr
							</h1>
							<h1 className="font-medium pb-8 text-green-500">
								+5.00%
							</h1>

							<BlueButton
								text="Visit CoinMarketCap.com"
								submit={submitHandler}
							/>
							<h1 className="font-medium pt-2 text-center text-sm">
								Please visit the following website for a more
								accurate result
							</h1>
						</div>
					</div>
				</div>
			</div>

			{/* Third Box */}
			<div className="flex flex-col w-1/2 ">
				<div className="box-border bg-zinc-100 drop-shadow-lg rounded-xl p-6">
					<h1 className="font-semibold text-lg pb-2">
						Transaction Histories
					</h1>
					<Dividers />
					<div className="flex flex-col items-center justify-center">
						<div className="grid grid-rows-1 gap-y-4 pt-4 w-4/5 pr-2">
							<Transactions
								amount={50000}
								type="Receive"
								textColor="text-green-500"
								backgroundColor="bg-green-200"
							/>
							<Transactions
								amount={-50000}
								type="Receive"
								textColor="text-red-500"
								backgroundColor="bg-red-200"
							/>
							<Transactions
								amount={50000}
								type="Receive"
								textColor="text-green-500"
								backgroundColor="bg-green-200"
							/>
							<Transactions
								amount={-50000}
								type="Receive"
								textColor="text-red-500"
								backgroundColor="bg-red-200"
							/>
							<Transactions
								amount={50000}
								type="Receive"
								textColor="text-green-500"
								backgroundColor="bg-green-200"
							/>
							<Transactions
								amount={-50000}
								type="Receive"
								textColor="text-red-500"
								backgroundColor="bg-red-200"
							/>
						</div>

						<div className="w-1/2 pt-4 flex flex-col justify-center items-center ">
							<h1 className="font-medium">Total Changes</h1>
							<h1 className="font-medium text-green-500 text-2xl">
								+4564564 XPX
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WalletView;

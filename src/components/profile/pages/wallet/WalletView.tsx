import React from "react";
import Dividers from "@mui/material/Divider";
import Transactions from "./Transactions";
import { motion } from "framer-motion";

interface Props {}

const WalletView = (props: Props) => {
	return (
		<div className="flex w-full h-full p-8 gap-x-8">
			<div className="flex flex-col w-1/2 h-full gap-y-8 ">
				<div className="box-border bg-zinc-100 w-full h-full drop-shadow-lg rounded-xl p-6 ">
					<div className="flex justify-between">
						<h1 className="font-semibold text-lg pb-2">
							Wallet Balance
						</h1>
					</div>
					<Dividers />

					<div className="flex gap-x-24 items-center pt-8">
						<div className="flex flex-col justify-between">
							<h1 className="font-medium pb-2 ">Total Balance</h1>
							<h1 className="font-medium pb-2 ">
								2347383 XPX Tokens
							</h1>
							<h1 className="font-semibold pb-6 text-3xl">
								RM420.69
							</h1>
							<motion.button
								whileHover={{ scale: 1.1 }}
								className="bg-[#015a91] rounded-lg"
							>
								<h1 className="font-medium p-4 text-white">
									XPX Private Key: 97nnsv786HKHK7t78
								</h1>
							</motion.button>
						</div>
					</div>
				</div>

				<div className="box-border bg-zinc-100 w-full drop-shadow-lg rounded-xl p-6 ">
					<div className="">
						<h1 className="font-semibold text-lg pb-2">
							ProximaX Price (XPX)
						</h1>
					</div>
					<Dividers />

					<div className="flex gap-x-12 items-start pt-8 ">
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

							<motion.button
								whileHover={{ scale: 1.1 }}
								className="bg-[#015a91] rounded-lg "
							>
								<h1 className="font-medium p-4 text-white">
									Visit CoinMarketCap.com
								</h1>
							</motion.button>
							<h1 className="font-medium pt-2 text-center">
								Please visit the following website for a more
								accurate result
							</h1>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-y-8  w-1/2">
				<div className="box-border bg-zinc-100 w-full h-full drop-shadow-lg rounded-xl p-6">
					<div className="">
						<h1 className="font-semibold text-lg pb-2">
							Transaction Histories
						</h1>
					</div>
					<Dividers />
					<div className="flex flex-col items-center justify-center">
						<div className="grid grid-rows-1 gap-y-4 pt-8 w-4/5 pr-2">
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

						<div className="w-1/2 pt-8 flex flex-col justify-center items-center ">
							<h1 className="font-medium">Total Changes</h1>
							<h1 className="font-medium text-green-500 text-3xl">
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

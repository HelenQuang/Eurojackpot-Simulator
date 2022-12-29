import ticketModel from "./ticketModel";

interface lotteryModel {
  _id: string;
  cost: Number;
  playAt: Date;
  prize: Number;
  result: [ticketModel];
  tickets: [ticketModel];
}

export default lotteryModel;

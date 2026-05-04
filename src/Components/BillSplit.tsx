import { useState } from "react";
import type { BillSplitProps } from "../App";

export default function BillSplit({ friendsList, selected }: BillSplitProps) {
  const [bill, setBill] = useState<number | null>(null);
  const [yourExpense, setYourExpense] = useState<number | null>(null);
  const friendsExpense = (bill ?? 0) - (yourExpense ?? 0);

  return (
    <div className="billContainer">
      <h2>Split bill with {selected}</h2>
      <div>
        <p>💰 Bill value</p>
        <input
          type="number"
          value={bill ?? 0}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>
      <div>
        <p>🙍‍♂️ Your expense</p>
        <input
          type="number"
          value={yourExpense ?? 0}
          onChange={(e) => setYourExpense(Number(e.target.value))}
        />
      </div>
      <div>
        <p>🧑‍🤝‍👩 {selected}'s expense</p>
        <input readOnly value={friendsExpense} />
      </div>
      <div>
        <p>🤑 Who is paying the bill?</p>
        <select name="" id="">
          <option value="">Select an option</option>
          <option value="">You</option>
          <option value="">{selected}</option>
        </select>
      </div>
    </div>
  );
}

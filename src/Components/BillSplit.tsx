import { useState } from "react";
import type { BillSplitProps } from "../App";

export default function BillSplit({
  friendsList,
  selected,
  setFriendsList,
}: BillSplitProps) {
  const [bill, setBill] = useState<number | null>(null);
  const [yourExpense, setYourExpense] = useState<number | null>(null);
  const friendsExpense = (bill ?? 0) - (yourExpense ?? 0);
  const [payer, setPayer] = useState<"friend" | "me">("me");

  function handleBillSplit(): void {
    setFriendsList((prev) =>
      prev.map((friend) =>
        friend.name === selected
          ? {
              ...friend,
              debt:
                payer === "me"
                  ? (friend.debt ?? 0) + friendsExpense
                  : (friend.debt ?? 0) - (yourExpense ?? 0),
            }
          : friend,
      ),
    );
  }

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
        <select
          value={payer}
          onChange={(e) => setPayer(e.target.value as "me" | "friend")}
        >
          <option value={"me"}>You</option>
          <option value={"friend"}>{selected}</option>
        </select>
      </div>
      <button onClick={handleBillSplit}>Split Bill!</button>
    </div>
  );
}

import type { FriendProps } from "../App";

export default function Friend({ friend, selected, setSelected }: FriendProps) {
  return (
    <div className="friend">
      <img
        src={friend.picture}
        alt={`A picture of ${friend.name}`}
        width="100px"
        height="auto"
      />
      <div className="friendDetails">
        <h2>{friend.name}</h2>
        <p
          style={
            (friend.debt ?? 0) > 0
              ? { color: "lightGreen" }
              : (friend.debt ?? 0) < 0
                ? { color: "red" }
                : { color: "gray" }
          }
        >
          {(friend.debt ?? 0) > 0
            ? `${friend.name} owes you $${friend.debt}.`
            : (friend.debt ?? 0) < 0
              ? `You owe ${friend.name} $${Math.abs(friend.debt ?? 0)}.`
              : `You and ${friend.name} are even.`}
        </p>
      </div>
      {selected !== friend.name ? (
        <button onClick={() => setSelected(friend.name)}>Select</button>
      ) : (
        <button onClick={() => setSelected(null)}>Close</button>
      )}
    </div>
  );
}

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
        <p>{friend.debt}</p>
      </div>
      {selected !== friend.name ? (
        <button onClick={() => setSelected(friend.name)}>Select</button>
      ) : (
        <button onClick={() => setSelected(null)}>Close</button>
      )}
    </div>
  );
}

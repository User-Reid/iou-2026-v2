import { useState } from "react";
import Friend from "./Components/Friend";
import BillSplit from "./Components/BillSplit";

export type FriendType = {
  picture: string;
  alt: string;
  name: string;
  debt: number | null;
};

export type DashboardProps = {
  friendsList: FriendType[];
  setFriendsList: React.Dispatch<React.SetStateAction<FriendType[]>>;
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
  addFriend: boolean;
  setAddFriend: React.Dispatch<React.SetStateAction<boolean>>;
};

export type BillSplitProps = {
  friendsList: FriendType[];
  selected: string | null;
  setFriendsList: React.Dispatch<React.SetStateAction<FriendType[]>>;
};

export type FriendProps = {
  friend: FriendType;
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
};

const initialFriends: FriendType[] = [
  { picture: "/option1.png", alt: "", name: "Clark", debt: -7 },
  { picture: "/option2.png", alt: "", name: "Sarah", debt: 20 },
  { picture: "/option3.jpg", alt: "", name: "Anthony", debt: 0 },
];

export default function App() {
  const [friendsList, setFriendsList] = useState<FriendType[]>([
    ...initialFriends,
  ]);
  const [selected, setSelected] = useState<string | null>(null);
  const [addFriendDisplay, setAddFriendDisplay] = useState<boolean>(false);

  const [newFriend, setNewFriend] = useState<string>("");

  function handleAddFriend(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const addedFriend: FriendType = {
      picture: `${newFriend}.png`,
      alt: `A picture of ${newFriend}`,
      name: newFriend,
      debt: 0,
    };

    setFriendsList((prev) => [...prev, addedFriend]);

    setNewFriend("");

    setAddFriendDisplay((prev) => !prev);
  }

  return (
    <div className="appContainer">
      {!addFriendDisplay ? (
        <div className="friendContainer">
          {friendsList.map((friend) => (
            <Friend
              key={friend.name}
              friend={friend}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
          <button onClick={() => setAddFriendDisplay((prev) => !prev)}>
            Add Friend
          </button>
        </div>
      ) : (
        <form action="" onSubmit={handleAddFriend}>
          <p>👱What is your friends name?</p>
          <input
            type="text"
            value={newFriend}
            onChange={(e) => setNewFriend(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
      {selected && (
        <BillSplit
          selected={selected}
          friendsList={friendsList}
          setFriendsList={setFriendsList}
        />
      )}
    </div>
  );
}

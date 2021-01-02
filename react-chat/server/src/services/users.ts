interface UsersAttribute {
  id: string;
  name: string;
  room: string;
}

const users: UsersAttribute[] = [];

export const addUser = ({
  id,
  name,
  room,
}: {
  id: string;
  name: string;
  room: string;
}) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );
  if (existingUser) return { error: "Username is taken" };
  const user = { id, name, room };

  users.push(user);

  return { user };
};

export const removeUser = (id: string) => {
  const index = users.findIndex((user) => user.id === id);
  if (index >= 0) {
    return users.splice(index, 1);
  }
};

export const getUser = (id: string) => {
  return users.find((user) => user.id === id);
};

export const getUsersInRoom = (room: string) => {
  return users.filter((user) => user.room === room);
};

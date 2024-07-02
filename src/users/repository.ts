type User = {
  id: number;
  name: string;
}

let users: User[] = [
  {
    id: 0,
    name: "Daniel Madrid",
  },
  {
    id: 1,
    name: "Alex Campos",
  },
  {
    id: 2,
    name: "Laura Vargas",
  },
];

export const get = () => {
  return users;
}

export const getOne = (args: {
  id: number;
}) => {
  return users.find(e => e.id === args.id)
}

export const create = (args: {
  name: string;
}) => {
  const user: User = {
    id: users.length,
    name: args.name,
  }
  users.push(user);
  return user;
}

export const update = (args: {
  id: number;
  values: {
    name?: string;
  };
}) => {
  users.forEach(user => {
    if (user.id === args.id) {
      user.name = args.values.name || user.name;
    }
  });

  return getOne({
    id: args.id,
  });
}

export const remove = (args: {
  id: number;
}) => {
  users = users.filter(user => user.id !== args.id);
}

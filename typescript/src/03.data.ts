export interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  lastLogin?: Date; // Optional property
}

const users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    isActive: true,
    lastLogin: new Date("2024-06-01T10:00:00Z"),
  },
  { id: 2, name: "Bob", email: "bob@example.com", isActive: false },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    isActive: true,
    lastLogin: new Date("2024-06-02T14:30:00Z"),
  },
];

export const dataPromise = new Promise<User[]>((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return reject(new Error("Failed to fetch user data."));
    }
    resolve(users);
  }, 1000);
});

export default dataPromise;

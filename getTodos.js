export default async (fileName) => {
  const res = await fetch(fileName);
  const todos = await res.json();
  return await todos;
};

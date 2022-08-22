const addToDatabase = async (text) => {
  const response = await fetch("http://localhost:3000/posts", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      text: text,
    }),
  });

  const data = await response.json();

  return data.id;
};

const updateDataBase = async (text, id) => {
  fetch("http://localhost:3000/posts/" + id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify({
      text: text,
    }),
  });
};

const getTextById = async (id) => {
  const response = await fetch("http://localhost:3000/posts/" + id);

  if (response.ok) {
    const data = await response.json();

    return data.text;
  } else {
    return null;
  }
};

const removeFromDatabase = async (id) => {
  await fetch("http://localhost:3000/posts/" + id, {
    method: "DELETE",
  });
};

export { addToDatabase, getTextById, removeFromDatabase, updateDataBase };

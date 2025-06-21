const saveId = (id) => {
  const oldId = localStorage.getItem("task");
  let ids = JSON.parse(oldId) || [];

  if (!ids.includes(id)) {
    ids = [...ids, id];
    const data = JSON.stringify(ids);
    localStorage.setItem("task", data);
  }
};

const getIds = () => {
  const oldId = localStorage.getItem("task");
  let ids = JSON.parse(oldId) || [];
  return ids;
};

const deleteId = (id) => {
  const ids = getIds();
  const removeId = ids.filter((n) => n !== id);

  localStorage.setItem("task", JSON.stringify(removeId));
};

export { saveId, getIds, deleteId };

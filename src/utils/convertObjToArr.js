const convertObjToArr = (obj) => {
  return Object.entries(obj).map(([_id, rest]) => {
    return { _id, ...rest };
  });
};

export { convertObjToArr };

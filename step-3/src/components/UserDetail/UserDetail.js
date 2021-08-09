import React, { useState, useEffect } from "react";

import Detail from "../Detail/Detail";

async function fetchUserDetail(id) {
  try {
    const detail = await fetch(`https://reqres.in/api/users/${id}`).then(
      (res) => res.json()
    );
    return detail;
  } catch (error) {
    console.error(error);
  }
}

function UserDetail({ id }) {
  const [detailData, setDetailData] = useState({});
  const { first_name, last_name, email, avatar } = detailData;

  useEffect(async () => {
    const details = await fetchUserDetail(id);
    setDetailData(details.data);
  }, []);

  return (
    <Detail
      first_name={first_name}
      last_name={last_name}
      email={email}
      imageLink={avatar}
    />
  );
}

export default UserDetail;

import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { requestList } from "../redux/actions/Users";
import { useDispatch, useSelector } from "react-redux";
import { first } from "lodash";

const Main = () => {
  const usersAllData = useSelector(
    (state) => state?.userList?.receiveUserList?.users
  );
  const [getData, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestList());
  }, []);

  useEffect(() => {
    if (usersAllData) {
      setData(first(usersAllData));
    }
  }, [usersAllData]);
  return (
    <>
      {usersAllData ? (
        <>
          <Title getData={getData} />
          <Card getData={getData} />
        </>
      ) : (
        <div class="spinner-grow mt-4" role="status"></div>
      )}
    </>
  );
};

export default Main;

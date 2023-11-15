import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store";

const UsersList = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users); // Replace 'users' with your actual slice name

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    console.log("Users Data:", usersData); // Logging the data fetched from Redux store
  }, [usersData]);

  return <>UserLists</>;
};

export default UsersList;

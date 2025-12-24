import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slice/animalsSlice";

export default function Search() {
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </>
  );
}

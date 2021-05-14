import Link from "next/link";
import { useDispatch } from "react-redux";
import { test } from "../src/redux/actions/userActions";

export default function Two() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(test())}>asdasd</button>
      <p>Hello whore</p>
      <Link href="/">
        <a>back</a>
      </Link>
    </div>
  );
}

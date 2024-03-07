import NavBar from "../NavBar/NavBar";
import { useParams } from "react-router-dom";
import SearchResults from "../SearchResults/SearchResults";

interface Props {
  validUser?: {};
}

export default function Profile({ validUser }: Props) {
  let { query } = useParams<{ query: string }>();
  return (
    <main>
      <NavBar validUser={validUser} />
      <SearchResults searchTerm={query!} validUser={validUser} />
    </main>
  );
}

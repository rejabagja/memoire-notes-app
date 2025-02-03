import React from "react";
import { getActiveNotes, searchNotes } from "../utils/local-data";
import AppLayout from "../components/layouts/AppLayout";
import NotesList from "../components/NotesList";
import { Link, useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { BiPlus } from "react-icons/bi";
import PropTypes from "prop-types";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage
      keywordDefault={keyword}
      changeSearchParams={changeSearchParams}
    />
  );
}
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      keyword: props.keywordDefault || "",
    };
  }

  componentDidMount() {
    this.setState({
      notes: getActiveNotes(),
    });
  }

  keywordChangeHandler = (keyword) => {
    this.setState({
      keyword,
    });
    this.props.changeSearchParams(keyword);
  };
  render() {
    const filteredNotes = searchNotes(this.state.keyword, this.state.notes);
    return (
      <AppLayout>
        <section className="homepage">
          <h2>Active Notes</h2>
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.keywordChangeHandler}
          />
          <NotesList notes={filteredNotes} />
          <div className="homepage__action">
            <Link to="/notes/new">
              <button type="button" className="action" title="create">
                <BiPlus />
              </button>
            </Link>
          </div>
        </section>
      </AppLayout>
    );
  }
}

HomePage.propTypes = {
  keywordDefault: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
  changeSearchParams: PropTypes.func.isRequired,
};

export default HomePageWrapper;

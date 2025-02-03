import React from "react";
import { getArchivedNotes, searchNotes } from "../utils/local-data";
import AppLayout from "../components/layouts/AppLayout";
import { useSearchParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import PropTypes from "prop-types";

function ArchivesPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArchivesPage
      keywordDefault={keyword}
      changeSearchParams={changeSearchParams}
    />
  );
}

class ArchivesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      keyword: props.keywordDefault || "",
    };
  }

  componentDidMount() {
    this.setState({
      notes: getArchivedNotes(),
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
        <section className="archives-page">
          <h2>Archived Notes</h2>
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.keywordChangeHandler}
          />
          <NotesList notes={filteredNotes} />
        </section>
      </AppLayout>
    );
  }
}

ArchivesPage.propTypes = {
  keywordDefault: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
  changeSearchParams: PropTypes.func.isRequired,
};

export default ArchivesPageWrapper;

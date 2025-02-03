import React from "react";
import AppLayout from "../components/layouts/AppLayout";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import { BiCheck } from "react-icons/bi";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

function CreatePageWrapper() {
  const navigate = useNavigate();

  return <CreatePage navigate={navigate} />;
}

class CreatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  handleTitleChange = (title) => {
    this.setState({ title });
  };

  handleBodyChange = (body) => {
    this.setState({ body });
  };

  handleSave = () => {
    const { title, body } = this.state;
    if (title === "" || body === "") {
      this.showAlert();
      return;
    }
    addNote({ title, body });
    this.props.navigate("/");
  };

  showAlert = () => {
    Swal.fire({
      title: "Opps!",
      text: "Title and body cannot be empty.",
      icon: "error",
    });
  };

  render() {
    return (
      <AppLayout>
        <section className="add-new-page">
          <div className="add-new-page__input">
            <input
              type="text"
              className="add-new-page__input__title"
              value={this.state.title}
              onChange={(e) => this.handleTitleChange(e.target.value)}
              placeholder="Input your new title here ... "
            />
            <div
              className="add-new-page__input__body"
              contentEditable
              data-placeholder="Input your new body here ... "
              onInput={(e) => this.handleBodyChange(e.target.innerHTML)}
            ></div>
          </div>
          <div className="add-new-page__action">
            <button
              className="action"
              onClick={() => this.handleSave()}
              title="save"
            >
              <BiCheck />
            </button>
          </div>
        </section>
      </AppLayout>
    );
  }
}

CreatePage.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default CreatePageWrapper;

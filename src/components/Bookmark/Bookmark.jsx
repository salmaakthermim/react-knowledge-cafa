import PropTypes from "prop-types";


const Bookmark = ({bookmark}) => {
    const {Title} = bookmark;

    return (
        <div>
            <h3 className="txt2">{Title}</h3>
        </div>
    );
};

Bookmrk.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;
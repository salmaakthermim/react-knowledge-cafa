// import PropTypes from "prop-types";


const Bookmark = ({bookmark}) => {
    const {Title} = bookmark;

    return (
        <div className="bg-white p-4 m-4 rounded-xl">
            <h3 className="text-2xl">{Title}</h3>
        </div>
    );
};

// Bookmrk.propTypes = {
//     bookmark: PropTypes.object
// }

export default Bookmark;
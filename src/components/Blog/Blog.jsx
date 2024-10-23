import './Blog.css'
import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {Title, Hashtags, Cover, Author, Author_img, Posted_Date, Reading_Time} = blog;
   
    return (
        <div className='blog-contan mb-20 space-y-4'>
            <img src={Cover} alt={`Cover picture of the title ${Title}`} />
            <div className='flex '>
                <div className='author flex'>
                    <img src={Author_img} alt="" />
                    <div className='ml-6'>
                       <h3 className='text-2xl'>{Author}</h3>
                       <p>{Posted_Date}</p>
                    </div>
                </div>
                <div className='ml-52 items-center'>
                <span>{Reading_Time} min read</span>
                <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-red-600 text-2xl'><BsBookmarks></BsBookmarks> </button>
                </div>
            </div>
            <h2 className='text-4xl mb-10'>{Title}</h2>
            <p>
                {
                    Hashtags.map(Hashtags => <span><a href="">#{Hashtags}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead( Reading_Time)} className='text-blue-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;

import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  
  return (
    <div className="w-1/2 bg-slate-200 ">
      <div>
        <h3 className='text-4xl'>Reading Time: {readingTime}</h3>
      </div>
    <h2 className="text-3xl text-center">Bookmarked Bloges: {bookmarks.length}</h2>
    {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />)
    }
</div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks
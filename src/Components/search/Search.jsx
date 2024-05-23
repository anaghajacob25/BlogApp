import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css'

function Search({ handleSearch,onInputChange,searchValue}) {
  return (
    <div className='searchBar-wrap'>
    <form onSubmit={handleSearch}>
      <input
        type='search'
        placeholder='Search Blog..'
        value={searchValue}
        onChange={onInputChange}
      />
      
      <button type='submit'><FontAwesomeIcon icon={faSearch} /></button>
    </form>
  </div>
  )
}

export default Search
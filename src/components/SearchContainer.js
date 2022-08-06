import { FormRow, FormRowSelect } from "."
import Wrapper from "../assets/wrappers/SearchContainer"
import { useSelector, useDispatch } from "react-redux"
import { handleChange, clearFilters } from "../features/job/allJobs"

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs)

  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job)

  const dispatch = useDispatch()

  const handleSearch = (e) => {
    if (isLoading) return
    dispatch(handleChange({ name: e.target.name, value: e.target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(clearFilters())
  }

  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>
        <div className='form-center'>
          {/* search by postion  */}
          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
          />
          {/* search by status  */}
          <FormRowSelect
            labelText='status'
            name='searchStatus'
            value={searchStatus}
            list={["all", ...statusOptions]}
            handleChange={handleSearch}
          />
          {/* search by type  */}
          <FormRowSelect
            labelText='type'
            name='searchType'
            value={searchType}
            list={["all", ...jobTypeOptions]}
            handleChange={handleSearch}
          />
          {/* sort */}
          <FormRowSelect
            labelText='sort'
            name='sort'
            value={sort}
            list={["all", ...sortOptions]}
            handleChange={handleSearch}
          />
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showStats } from "../../features/job/allJobsSlice"
import { StatsContainer, ChartsContainer, Loading } from "../../components"
import { months } from "moment"

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (state) => state.allJobs
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showStats())
    //eslint-disable-next-line
  }, [])

  if (isLoading) {
    return <Loading center />
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
}

export default Stats

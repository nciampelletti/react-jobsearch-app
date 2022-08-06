import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showStats } from "../../features/job/allJobs"
import { StatsContainer, ChartsContainer, Loading } from "../../components"

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

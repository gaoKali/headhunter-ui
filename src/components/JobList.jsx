import JobCard from './JobCard'
export default function JobList({ jobs, onOpen }) { if (!jobs.length) return <div className="empty-state">没有找到符合条件的职位，请尝试清空筛选条件。</div>; return <div className="job-list">{jobs.map(job => <JobCard job={job} onOpen={onOpen} key={job.id} />)}</div> }

import { jobs as defaultJobs } from '../data/jobs'

export const JOBS_STORAGE_KEY = 'headhunter-ui-jobs'

const randomStatus = () => ({ 加: Math.floor(Math.random() * 6), 推: Math.floor(Math.random() * 6), 初: Math.floor(Math.random() * 4), 复: Math.floor(Math.random() * 4), OF: Math.floor(Math.random() * 3), 职: Math.floor(Math.random() * 4) })

const normalizeJob = job => ({
  ...job,
  id: String(job.id),
  salaryMin: Number(job.salaryMin ?? String(job.salary || '0-0').split('-')[0]) || 0,
  salaryMax: Number(job.salaryMax ?? String(job.salary || '0-0').split('-')[1]?.replace('万', '')) || 0,
  commission: Number(String(job.commission ?? 0).replace('%', '')) || 0,
  aiRecommend: Number(job.aiRecommend ?? job.aiCount ?? 0) || 0,
  industry: job.industry ?? (job.industries || []).join('、'),
  reviews: Number(job.reviews || 0),
  status: job.statusRandomized ? job.status : randomStatus(),
  statusRandomized: true,
})

export function loadJobs() {
  try {
    const saved = localStorage.getItem(JOBS_STORAGE_KEY)
    if (saved) {
      const normalized = JSON.parse(saved).map(normalizeJob)
      saveJobs(normalized)
      return normalized
    }
  } catch (error) {
    console.warn('无法读取本地职位数据', error)
  }
  const initial = defaultJobs.map(normalizeJob)
  saveJobs(initial)
  return initial
}

export function saveJobs(jobs) {
  localStorage.setItem(JOBS_STORAGE_KEY, JSON.stringify(jobs.map(normalizeJob)))
}

export function clearSavedJobs() {
  localStorage.removeItem(JOBS_STORAGE_KEY)
}

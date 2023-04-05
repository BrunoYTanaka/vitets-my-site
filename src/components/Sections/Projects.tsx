import cn from 'classnames'
import { Section } from 'components/Section'
import { ProjectCard } from 'components/ProjectCard'
import { githubRepos } from 'constants/githubRepos'

function Projects() {
  const repos = githubRepos.filter((repo) => repo.description)

  return (
    <Section className="flex flex-col items-center justify-center gap-20 py-12 md:py-24">
      <h4 className={cn('section-title')}>Projetos</h4>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3">
        {repos.map((repo) => (
          <ProjectCard key={repo.id} {...repo} />
        ))}
      </div>
    </Section>
  )
}

export { Projects }

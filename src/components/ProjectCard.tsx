type ProjectCardProps = {
  title: string
  desc: string
  url: string
  tags?: string[]
}

export default function ProjectCard({ title, desc, url, tags }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>

      {tags && (
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}

      <a href={url} className="project-link">
        View Details -&gt;
      </a>
    </div>
  )
}

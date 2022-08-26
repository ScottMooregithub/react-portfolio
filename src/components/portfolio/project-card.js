export function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-text">
        <div className="project-title">{props.title}</div>
        <p>{props.description}</p>
      </div>
      <a href={props.link}>
        {" "}
        <img src={props.imageUrl} className="project-pic" alt="" />
      </a>
    </div>
  );
}

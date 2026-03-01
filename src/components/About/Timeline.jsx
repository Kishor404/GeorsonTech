import "../../styles/About.css";
const data = [
  {
    year: "1984",
    title: "Foundation of George Associates",
    desc:
      "Started as an industrial electrical and mechanical service provider, delivering reliable installation, maintenance, and engineering solutions for core manufacturing industries.",
  },
  {
    year: "2005 - 2015",
    title: "Partnership with Global MNCs",
    desc:
      "Successfully executed major automation and electrical projects in collaboration with Siemens, ABB, GE, and Schneider, strengthening technical expertise and project delivery capabilities.",
  },
  {
    year: "2017",
    title: "20+ Crore Project Execution",
    desc:
      "Delivered high-value industrial automation projects with advanced control systems, ensuring performance, productivity, and long-term operational efficiency for clients.",
  },
  {
    year: "2017",
    title: "Formation of Two Specialized Companies",
    desc:
      "Business expanded into George Multitech Systems Pvt. Ltd. and Georson Tech Pvt. Ltd. to focus on turnkey automation, procurement, and Industry 4.0 solutions.",
  },
  {
    year: "Today",
    title: "Industry 4.0 Transformation",
    desc:
      "Providing smart factory solutions using IoT, robotics, PLC, SCADA, and cloud integration to enhance digital manufacturing and real-time monitoring.",
  },
  {
    year: "Future",
    title: "Customized Robotic & Automation Projects",
    desc:
      "Driving next-generation productivity through intelligent robotic systems, AI-based automation, and fully integrated industrial digital transformation solutions.",
  },
];

function Timeline() {
  return (
    <section className="about-timeline">
  <div className="about-container">
    <div className="about-timeline-container">

      {data.map((item, index) => (
        <div
          key={index}
          className={`about-timeline-item ${index % 2 === 0 ? "about-left" : "about-right"}`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        >

          <div className="about-timeline-content">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>

          <div className="about-timeline-dot">
            <span>{item.year}</span>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>
  );
}

export default Timeline;
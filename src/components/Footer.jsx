export const Footer = () =>{
    return(
      <footer>
      <p> Copyright Howard Lee {new Date().getFullYear()}</p>
      <div className="pb-6 space-x-2">
        <a href="https://github.com/howardlee93">Github</a>
        <a href="https://www.linkedin.com/in/leehoward93/">LinkedIn</a>
        <a href="https://howardlee93.github.io/">Portfolio</a>
      </div>
      </footer>
    )
};
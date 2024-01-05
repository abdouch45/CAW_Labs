import '../Styles/blogs.css'

const blogs = (props) => {
    return (
      <div className="blog-card">
        <img src={props.data.path} alt="blog img" />
        <h3>{props.data.title}</h3>
        <p>{props.data.text}</p>
       <p className='auth'>written by: <h4>{props.data.author}</h4></p>
        
      </div>
    );
  };
  
  export default blogs;
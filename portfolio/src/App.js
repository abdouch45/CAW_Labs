import ContactForm from './components/ContactForm.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ProjectShowcase from './components/Project.js'
import NavBar from './components/navBar.js'
import Blogs from './components/Blogs.js'
import Feedback from './components/feedBack.js'
import  './Styles/App.css'



const feedbacks=[{name:"Anis Abed",role:"colleague",text:"serious the best coleague i had",rating:4.5},
{name:"client1",role:"client",text:"good job",rating:5},
{name:"client2",role:"client",text:"good job delivred in time",rating:4}]
const blogs=[{author:"Anis Abed",title:"blog1",text:"blog number 1 for testing",path:"/blog1.jfif"},
{author:"uknown",title:"blog2",text:"blog number 2 for testing",path:"/blog1.jfif"}]

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='title'><h1>Home</h1></div>
      <div id='Home'>

        <p>Welcome to my portfolio. I am a <strong>full-stack web developer</strong><br></br> <strong>mobile app developer</strong>
        <br></br> <strong>API developer</strong><br></br> And <strong>database conceptor</strong>.</p>


      </div>
      <div className='title'><h1>showcase</h1></div>
      <div id='showcase'>
      <ProjectShowcase></ProjectShowcase>
      </div>
      <div className='title'><h1>Skills</h1></div>
      <div id='skills'>
          <p>Skills</p>
      </div>
      <div className='title' id='contact'><h1>contact Me</h1></div>
      <div id='contactInfo'>
      <div className="contact-info">
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <div className="contact-form">
        <ContactForm />
      </div>
      </div>
      </div>
      
    
      <div className='title'><h1>Blogs</h1></div>

       <div id='blogs'>
       {blogs.map((blog)=> <Blogs data={blog}></Blogs>) }
       </div>
       <div className='title'><h1>Testimonial</h1></div>

      <div id='feedback'>
      {feedbacks.map((feedback)=><Feedback data={feedback}/>) }
      </div>


    </div>
  );
}

export default App;
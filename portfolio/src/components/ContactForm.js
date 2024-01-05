import '../Styles/contactform.css'
const contactForm = () =>{
return (<div id="contactForm">
     <form>
        <label>Name</label>
        <input type="text" placeholder="name"></input>
        <label>Email</label>
        <input type="email" placeholder="email" ></input>
        <label >Message</label>
        <textarea placeholder="message"></textarea>
        <input type="submit" value="submit" />
     </form>

</div>);
}
export default contactForm;
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className='icons'>
        <a href="mailto:dionisggr@gmail.com" target="_blank" aria-label="email"><i class="fa fa-envelope" aria-hidden="true"></i></a>
        <a href="https://github.com/dionisggr/flickshare-client/" target="_blank" aria-label="github"><i class="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/dionis-gonzalez-ramirez/" target="_blank" aria-label="linked-in"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
      </div>
      
      <h2>&copy; Dionis González Ramírez</h2>
    </footer>
  );
};

export default Footer;
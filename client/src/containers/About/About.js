import React from "react";
import "./About.css"

const styles = {
  divStyle: {
      background: "green",
      justifyContent: "flex-end",
  }
};
const About = () => (
  <div>
    <h1>About Page</h1>
    <p>
      Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer
      gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam.
      Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt
      fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent
      euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
      diam, sit amet facilisis lectus blandit at.
    </p>
    <p>
      Pharetra finibus est at efficitur. Praesent sed congue diam. Integer
      gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam.
      Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt
      fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent
      euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
      diam, sit amet facilisis lectus blandit at.
    </p>

    <div style={styles.image} className="footerAbout">
        <p>Address: 117 N Main St, Mt Holly, NC 28120</p>
            <p>
                Hours: Sunday Closed Monday 7AM–8PM Tuesday 7AM–8PM Wednesday 7AM–8PM
                Thursday 7AM–8PM Friday 7AM–9PM Saturday 8AM–8PM
            </p>
            <p>Phone: (704) 820-6556</p>
            <a href="https://www.facebook.com/catawbacoffeeco/">
            <img className="img-responsive1" src={require("../../images/fb.png")} alt="Facebook"width="35" height="35" />
            </a>
            <a href="https://www.yelp.com/biz/catawba-coffee-co-mount-holly">
            <img className="img-responsive2" src={require("../../images/Yelp.png")} alt="Yelp"width="35" height="35"/></a>
            <a href="https://www.instagram.com/catawbacoffeeco/">
            <img className="img-responsive3" src={require("../../images/Instagram.png")} alt="Instagram"width="35" height="35"/></a>
        </div>
  </div>
);

export default About;

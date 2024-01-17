import "./Testimonials.css";

const TestimonialsGrid = () => {
  return (
    <div className="outerdiv">
      <div className="innerdiv">
        {/* div1 */}
        <div className="div1 eachdiv">
          <div className="userdetails">
            <div className="imgbox">
              <img
                src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg"
                alt=""
              />
            </div>
            <div className="detbox">
              <p className="name">Rajesh Mishra</p>
              <p className="designation">Lives in Canada</p>
            </div>
          </div>
          <div className="review">
            <h4>Impressive service! I particularly like the second one</h4>
            <p>
              "Your impressive service at Your Indian Shop has been a
              game-changer for us! Reliable and timely parcel deliveries have
              become a cornerstone for our family. The professionalism and
              consistency in exceeding our expectations make your service stand
              out. It's more than just a delivery; it's a reliable partnership
              for those living outside India. Your commitment to excellence has
              made every interaction a seamless and trustworthy experience.
              Thank you for making our lives easier with your exceptional
              service!"
            </p>
          </div>
        </div>
        {/* div2 */}
        <div className="div2 eachdiv">
          <div className="userdetails">
            <div className="imgbox">
              <img
                src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg"
                alt=""
              />
            </div>
            <div className="detbox">
              <p className="name">Vibhu Sharma</p>
              <p className="designation"> Lives in Dubai</p>
            </div>
          </div>
          <div className="review">
            <h4>The team was very suppotive</h4>
            <p>
              “I've been using YIS for personal shipments, and I'm thrilled with
              the experience. From the easy shipping process to on-time
              deliveries, it's been hassle-free. The rates are reasonable, and
              their half yearly plans are awesome"
            </p>
          </div>
        </div>
        {/* div3 */}

        {/* div4 */}
        <div className="div4 eachdiv">
          <div className="userdetails">
            <div className="imgbox">
              <img
                src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg"
                alt=""
              />
            </div>
            <div className="detbox">
              <p className="name dark">Harpreet Singh</p>
              <p className="designation dark"> Lives in London</p>
            </div>
          </div>
          <div className="review dark">
            <h4>An overall wonderful and rewarding experience</h4>
            <p>
              “ Working remotely means I often need to send and receive
              important documents. YIS service has been a lifesaver ”
            </p>
          </div>
        </div>
        {/* div5 */}
        <div className="div5 eachdiv">
          <div className="userdetails">
            <div className="imgbox">
              <img
                src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg"
                alt=""
              />
            </div>
            <div className="detbox">
              <p className="name">Cris Leina</p>
              <p className="designation">Lives in Mallorca</p>
            </div>
          </div>
          <div className="review">
            <h4>
              Seamless Global Delivery: Ensuring Your Packages Reach You
              Anywhere in the World
            </h4>
            <p>
              “ "Frequent travel to India often introduces an element of chaos,
              yet your exceptional service acts as a reliable anchor, ensuring
              that my packages reach me seamlessly regardless of my location in
              the world. The proficiency of your international shipping services
              adds an extra layer of convenience to my globetrotting lifestyle,
              making each delivery a hassle-free experience. Your commitment to
              excellence and the streamlined logistics process truly make a
              significant difference in managing the challenges of constant
              travel. I appreciate the peace of mind your services bring to the
              complex world of international parcel deliveries. ”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsGrid;

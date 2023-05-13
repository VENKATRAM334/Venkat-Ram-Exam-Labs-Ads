import './index.css'

const Offers = () => {
  return (
    <div>
      <div className="guaranteed-container">
        <div className="badge-container">
          <img
            className="badge-icon"
            src="https://res.cloudinary.com/dyqsgrmqh/image/upload/v1684006506/images-removebg-preview_1_j6gmif.png"
            alt="badge"
          />
          <div>
            <p className="satisfaction-text">Satisfaction Guaranteed</p>
            <p className="pass-rate">
              98.4% <span className="text">Pass Rate</span>
            </p>
          </div>
        </div>
        <p className="pass-rate text">
          Our team works hard to provide students with high exam practice test
          questions and compelling learning experiences. We're confident of the
          quality level of the products we offer and provide no hassle
          satisfaction guarantee.
        </p>
      </div>

      <div className="guaranteed-container exams-labs-container">
        <h1 className="why-choose-text">Why choose Exam-Labs?</h1>
        <p className="why-choose-text over">
          Over <span className="span-content">564,716</span> Satisfied Customers
          Since 2015
        </p>
        <div className="mark-content-container">
          <img
            className="correct-mark-icon"
            src="https://res.cloudinary.com/dyqsgrmqh/image/upload/v1684008045/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-removebg-preview_jge7hg.png"
            alt="correct mark icon"
          />
          <p className="pass-rate text">
            <span className="text-content">100%</span> Latest Exam Questions
          </p>
        </div>
        <div className="mark-content-container">
          <img
            className="correct-mark-icon"
            src="https://res.cloudinary.com/dyqsgrmqh/image/upload/v1684008045/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-removebg-preview_jge7hg.png"
            alt="correct mark icon"
          />
          <p className="pass-rate text">
            Accurate & Updated <span className="text-content">Answers</span>
          </p>
        </div>

        <div className="mark-content-container">
          <img
            className="correct-mark-icon"
            src="https://res.cloudinary.com/dyqsgrmqh/image/upload/v1684008045/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-removebg-preview_jge7hg.png"
            alt="correct mark icon"
          />
          <p className="pass-rate text">
            Regular <span className="text-content">Free</span> Updates
          </p>
        </div>

        <div className="mark-content-container">
          <img
            className="correct-mark-icon"
            src="https://res.cloudinary.com/dyqsgrmqh/image/upload/v1684008045/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-removebg-preview_jge7hg.png"
            alt="correct mark icon"
          />
          <p className="pass-rate text">
            <span className="text-content">24/7</span> Customer Support
          </p>
        </div>

        <div className="mark-content-container">
          <img
            className="correct-mark-icon"
            src="https://res.cloudinary.com/dyqsgrmqh/image/upload/v1684008045/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-removebg-preview_jge7hg.png"
            alt="correct mark icon"
          />
          <p className="pass-rate text">
            <span className="text-content">98.4%</span> Pass Rate
          </p>
        </div>

        <div className="mark-content-container">
          <img
            className="correct-mark-icon"
            src="https://res.cloudinary.com/dyqsgrmqh/image/upload/v1684008045/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-removebg-preview_jge7hg.png"
            alt="correct mark icon"
          />
          <p className="pass-rate text">
            <span className="text-content">Instant</span> Download
          </p>
        </div>
      </div>

      <div className="guaranteed-container exams-labs-container">
        <h1 className="why-choose-text">Secure Shopping Experience</h1>

        <img
          className="card"
          src="https://res.cloudinary.com/dyqsgrmqh/image/upload/v1684009725/cards_na0zdx.png"
          alt="correct mark icon"
        />
        <p className="pass-rate text">
          We provide secure shopping experience backed by High Security SSL from
          McAfee, so you are guaranteed that any your purchase on Exam-Labs is
          100% safe. <br />
          <br /> You will get access to your products immediately after we
          receive your payment.
        </p>
        <img
          className="mca-image"
          src="https://res.cloudinary.com/dyqsgrmqh/image/upload/v1684009985/mcafee_gwaxuu.png"
          alt="Mca"
        />
      </div>
      <div className="need-help-container">
        <h1 className="why-choose-text">Need Help Contact Us</h1>
        <p className="customer-support">Custumer Support</p>
      </div>
    </div>
  )
}

export default Offers

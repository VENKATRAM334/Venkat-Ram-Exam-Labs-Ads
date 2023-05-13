import {Component} from 'react'
import Offers from '../Offers'
import Table from '../Table'
import './index.css'

class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeLeft: '',
      countDownDate: new Date().getTime() + 2 * 60 * 60 * 1000, // 2 hours in milliseconds
    }
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  startTimer = () => {
    this.interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = this.state.countDownDate - now
      if (distance <= 0) {
        clearInterval(this.interval)
        this.setState({timeLeft: 'Offer ended'})
        this.setState({countDownDate: now + 2 * 60 * 60 * 1000}) // reset countdown to 2 hours from now
        this.startTimer() // start the timer again
      } else {
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        )
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        this.setState({
          timeLeft: ` ${hours} : ${minutes} : ${seconds}`,
        })
      }
    }, 1000)
  }

  handleHomeClick = () => {
    window.location.href = 'https://www.exam-labs.com/'
  }

  render() {
    return (
      <>
        <div>
          <div className="home-checkout">
            <p className="home-text" onClick={this.handleHomeClick}>
              Home >
            </p>
            <p className="chechout-text">Checkout</p>
          </div>
          <h1 className="secure-heading-text">Secure One-Step Checkout</h1>
          <p className="product-text-para">
            Your Product Will Become Available Immediately After Purchase
          </p>
          <p className="chechout-text">Your Shopping cart is empty</p>
          <a href="https://www.exam-labs.com/" className="product-text-para">
            Continue Shopping
          </a>
          <div className="timer-container">
            <img
              className="timer"
              src="https://res.cloudinary.com/dyqsgrmqh/image/upload/v1683982767/1420303_mdqlmf.png"
              alt="timer"
            />
            <div className="timer-flex-container">
              <p className="limit">LIMITED TIME OFFER</p>
              <p className="limit space-left">Ends in: {this.state.timeLeft}</p>
              <p className="limit">GET 10% OFF Use Code: EXAMSTAR</p>
            </div>
          </div>
          <div className="table-and-offers">
            <Table />
            <Offers />
          </div>
        </div>
      </>
    )
  }
}

export default Banner

import './index.css'

const Header = () => {
  const handleHomeClick = () => {
    window.location.href = 'https://www.exam-labs.com/'
  }
  return (
    <>
      <div className="bg-header">
        <img
          onClick={handleHomeClick}
          className="header-logo"
          src="https://res.cloudinary.com/dyqsgrmqh/image/upload/v1683979936/logo_n5bg1t.svg"
          alt="ExamLab"
        />
      </div>
    </>
  )
}

export default Header

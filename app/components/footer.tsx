

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                <a href="/">
                <img src="/Library.svg" className="footer__logo--img" alt="" />
                </a>
                <div className="footer__list">
                    <a href="/" className="footer__link">Home</a>
                    <span className="footer__link no-cursor">About</span>
                    <a href="/books" className="footer__link">Books</a>
                    <a href="/cart" className="footer__link">Cart</a>
                </div>
                <div className="footer__copyright">Copyright &copy; 2025 Library</div>
            </div>
        </div>
    </footer>
  )
}

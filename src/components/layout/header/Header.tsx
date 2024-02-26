import scss from "./Header.module.scss";

const Header = () => {
	return (
    <div className={scss.Header}>
    <div className="container">
      <div className={scss.content}>
        <div className={scss.car}>
          <h1>
            Manas Tours 🇰🇬
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/800px-Flag_of_Kyrgyzstan.svg.png"
              alt=""
            />
          </h1>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Header;

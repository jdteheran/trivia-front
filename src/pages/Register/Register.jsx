import Logo from "../../components/Logo";
import RegisterForm from "../../components/RegisterForm";
import style from "./register.module.css";

const Register = () => {
  const { card, container, logo, form, card2 } = style;

  return (
    <div className={card}>
      <div className={container}>
        <div className={card2}>
          <div className={logo}>
            <Logo />
          </div>
          <div className={form}>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

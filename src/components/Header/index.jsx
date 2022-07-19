import Calendario from "../../Assets/Calendario.svg";
import { Title, Day } from "./style";

function Header({ day }) {
  return (
    <div
      style={{
        height: "12%",
      }}
    >
      <Title>
        <img src={Calendario} alt="iconeCalendario" />
        <h2>Horarios de Aula</h2>
      </Title>
      <Day>
        <h1>{day}</h1>
      </Day>
    </div>
  );
}

export default Header;

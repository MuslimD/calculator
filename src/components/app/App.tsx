import "./app.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  handleTelephone,
  handleTelephoneValidate,
  handleOperation,
  handleRansomWiFiRouter,
  handleRentWiFiRouter,
} from "../../store/reducers/configure";
import InternetRange from "../internetRange/InternetRange";
import MinutsRange from "../minutsRange/MinutsRange";
import SocialNetwork from "../socialNetworks/SocialNetworks";
import { costCalculation } from "../../helpers/costCalculation";

const App = () => {
  const {
    telephone,
    telephoneValidate,
    operation,
    minuts,
    internet,
    rentWiFiRouter,
    ransomWiFiRouter,
    faceBook,
    vK,
    oK,
    instagram,
    tikTok,
  } = useAppSelector((state) => state.configures);
  const dispatch = useAppDispatch();
  return (
    <form className="app">
      <div>Настройте тариф</div>
      <div>Телефон</div>
      <input
        className={
          telephoneValidate !== "Обязательное поле" ? "error" : "telephone"}
        onFocus={() => dispatch(handleTelephoneValidate("Обязательное поле"))}
        onBlur={(e) => {
          if (/[a-zа-яё]/i.test(e.target.value)) {
            dispatch(handleTelephoneValidate("Поле не должно содержать буквы"));
          }
          if (e.target.value.length !== 11) {
            {
              dispatch(
                handleTelephoneValidate(
                  "Поле должно быть соответствующей длины"
                )
              );
            }
          }
        }}
        type="text"
        placeholder="+7 (___) ___ __ __"
        value={telephone}
        onChange={(e) => dispatch(handleTelephone(e.target.value))}/>
      <div
        className={
          telephoneValidate !== "Обязательное поле" ? "error_message" : ""}>
        {telephoneValidate}
      </div>
      <div>Оператор</div>
      <select
        value={operation}
        onChange={(e) => dispatch(handleOperation(e.target.value))}
        className="operation">
        <option className="option">Оператор1</option>
        <option>Оператор2</option>
        <option>Оператор3</option>
      </select>
      <div>Минуты</div>
      <MinutsRange />
      <div>Интернет</div>
      <InternetRange />
      <div>Wi-Fi роутер</div>
      <div>
        <input
          checked={rentWiFiRouter}
          onChange={() => dispatch(handleRentWiFiRouter(!rentWiFiRouter))}
          type="checkbox"
        />
        Аренда <b>99</b> Р/мес.
      </div>
      <div>
        <input
          checked={ransomWiFiRouter}
          onChange={() => dispatch(handleRansomWiFiRouter(!ransomWiFiRouter))}
          type="checkbox"
        />
        Выкупить <b>2600</b> Р
      </div>
      <div>Соцсети</div>
      <SocialNetwork />
      <button
        className="submit"
        onClick={(e) => {
          e.preventDefault();
          if (telephoneValidate === "Обязательное поле" && telephone !== "+7") {
            alert(
              JSON.stringify({
                telephone: telephone,
                operation: operation,
                minuts:
                  minuts === "34"
                    ? 350
                    : minuts === "66"
                    ? 600
                    : minuts === "100"
                    ? 650
                    : 200,
                internet:
                  internet === "34"
                    ? 150
                    : internet === "66"
                    ? 300
                    : internet === "100"
                    ? 350
                    : 50,
                rentWiFiRouter: rentWiFiRouter,
                ransomWiFiRouter: ransomWiFiRouter,
                faceBook: faceBook,
                vK: vK,
                oK: oK,
                instagram: instagram,
                tikTok: tikTok,
              })
              //`Телефон: ${telephone}
              // Оператор: ${operation}
              // Минуты: ${
              //   minuts === "34"
              //     ? 350
              //     : minuts === "66"
              //     ? 600
              //     : minuts === "100"
              //     ? 650
              //     : 200
              // }
              // Интернет: ${
              //   internet === "34"
              //     ? 150
              //     : internet === "66"
              //     ? 300
              //     : internet === "100"
              //     ? 350
              //     : 50
              // }
              // Аренда: ${rentWiFiRouter}
              // Выкупка: ${ransomWiFiRouter}
              // Facebook: ${faceBook}
              // VK: ${vK}
              // OK: ${oK}
              // Instagram: ${instagram}
              // TikTok: ${tikTok}`)
            );
            //Сначала думал так вывести но так как сказали Json, адъекты alert не выводит
          }
        }}
        type="submit"
      >
        {costCalculation({
          telephone,
          telephoneValidate,
          operation,
          minuts,
          internet,
          rentWiFiRouter,
          ransomWiFiRouter,
          faceBook,
          vK,
          oK,
          instagram,
          tikTok,
        })}
        Р в месяц
      </button>
    </form>
  );
};

export default App;

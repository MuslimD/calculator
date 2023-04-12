import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { handleInternet } from "../../store/reducers/configure";

const InternetRange = () => {
  const { internet } = useAppSelector((state) => state.configures);
  const dispatch = useAppDispatch();
  return (
    <>
      <input
        style={{
          background: `-webkit-linear-gradient(left,black 0%,black ${internet}%,grey ${internet}%,grey 100%)`,
        }}
        className="internet_range"
        onChange={(e) => {
          if (e.target.value >= "0" && e.target.value < "20") {
            dispatch(handleInternet("0"));
          }
          if (e.target.value >= "20" && e.target.value < "40") {
            dispatch(handleInternet("34"));
          }
          if (e.target.value >= "40" && e.target.value < "80") {
            dispatch(handleInternet("66"));
          }
          if (e.target.value > "80" && e.target.value < "99") {
            dispatch(handleInternet("100"));
          }
        }}
        value={internet}
        type="range"
        min={0}
        max={100}
      />
      <datalist id="values">
        <option value="0" label="5"></option>
        <option value="34" label="15"></option>
        <option value="66" label="30"></option>
        <option value="100" label="35"></option>
      </datalist>
    </>
  );
};

export default InternetRange;

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { handleMinuts } from "../../store/reducers/configure";

const MinutsRange = () => {
  const { minuts } = useAppSelector((state) => state.configures);
  const dispatch = useAppDispatch();
  return (
    <>
      <input
        style={{
          background: `-webkit-linear-gradient(left,#7a5cfa 0%,#7a5cfa ${minuts}%,grey ${minuts}%,grey 100%)`,
        }}
        className="minuts_range"
        onChange={(e) => {
          if (e.target.value >= "0" && e.target.value < "20") {
            dispatch(handleMinuts("0"));
          }
          if (e.target.value >= "20" && e.target.value < "40") {
            dispatch(handleMinuts("34"));
          }
          if (e.target.value >= "40" && e.target.value < "80") {
            dispatch(handleMinuts("66"));
          }
          if (e.target.value > "80" && e.target.value < "99") {
            dispatch(handleMinuts("100"));
          }
        }}
        value={minuts}
        type="range"
        min={0}
        max={100}
        list="values"
      />
      <datalist id="values">
        <option value="0" label="250"></option>
        <option value="100" label="350"></option>
        <option value="66" label="600"></option>
        <option value="100" label="650"></option>
      </datalist>
    </>
  );
};

export default MinutsRange;

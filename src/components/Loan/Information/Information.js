import NameInput from "./NameInput";
import TrusterPeople from "./Trusted";

export default function Information() {
  return (
    <div className="information">
      <p className="information__title">Информация о заёмщике</p>
      <NameInput />
      <TrusterPeople />
    </div>
  );
}

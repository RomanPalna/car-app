import CustomButton from "./Button";

export default function Submit() {
  return (
    <div className="submit">
      <p>
        Отправляя заявку вы соглашатесь с условями обработки{" "}
        <a href="/loan">персональных данных</a>
      </p>
      <CustomButton />
    </div>
  );
}

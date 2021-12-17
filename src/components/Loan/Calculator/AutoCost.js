// function Calc(credit, months) {

//     const monthInstallment = credit * (17% / (1+17%) - months - 1)
// }

export default function AutoCost() {
  return (
    <div className="autoCost__section">
      <div className="autoCost cost">
        <p className="autoCost__cost">Стоимость авто</p>
        <p className="autoCost__sum">38000 грн</p>
      </div>
      <div className="autoCost">
        <p className="autoCost__cost">Ежемесячный платёж</p>
        <p className="autoCost__sum">14000 грн </p>
      </div>
    </div>
  );
}

// На сторінці відобразити перших 10 оголошень, реалізувати можливість вибору одного з варіантів для подальшого розрахунку платежу по кредиту. Формула розрахунку ануїтетного платежу (А) являє собою таке співвідношення: А = К * (П / (1 + П) -М-1), де К - сума кредиту (різниця між ціною в оголошені і першим вкладом який в свою чергу потрібно отримати з елементу повзунка що відображений на макеті), П - процентна ставка (17%), М - кількість місяців. Результат розрахунку відобразити в блоці з підписом "Ежемесячный платёж"

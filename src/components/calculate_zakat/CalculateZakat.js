"use client";
import React, { useState } from "react";
import "./calculateZakat.css";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faCalendarDays,
  faUser,
  faHandshakeSlash,
  faTableCellsRowUnlock,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
export default function CalculateZakat() {
  // const t = useTranslations("header");
  const locale = useLocale();
  const [money, setMoney] = useState(0);
  const [property, setProperty] = useState(0);
  const [gold18, setGold18] = useState(0);
  const [gold21, setGold21] = useState(0);
  const [building, setBuilding] = useState(0);

  const goldPrice18 = 3968.5;
  const goldPrice21 = 4630;

  const moneyZakat = money * 0.025;
  const propertyZakat = property * 0.025;
  const goldZakat = (gold18 * goldPrice18 + gold21 * goldPrice21) * 0.025;
  const buildingZakat = building * 0.025;

  const totalZakatBase =
    money + property + (gold18 * goldPrice18 + gold21 * goldPrice21) + building;
  const goldNisabPrice = 85 * goldPrice21;
  const reachedNisab = totalZakatBase >= goldNisabPrice;
  const total = reachedNisab ? totalZakatBase * 0.025 : 0;

  let zakatConditions = [
    {
      id: 1,
      title: "بلوغ النصاب",
      description:
        "أن يبلغ المال الحد الأدنى المقرر شرعًا (ما يعادل قيمة 85 جرامًا من الذهب تقريبًا)",
      icon: faScaleBalanced,
    },
    {
      id: 2,
      title: "مرور عام هجري",
      description:
        "أن يمر على المال عام هجري كامل (354 يومًا) منذ أن بلغ النصاب",
      icon: faCalendarDays,
    },
    {
      id: 3,
      title: "الملكية الكاملة",
      description: "أن يكون المال مملوكًا لصاحبه وقابلًا للتصرف",
      icon: faUser,
    },
    {
      id: 4,
      title: "الحرية من الديون",
      description: "أن يكون المال خالٍ من الديون أو الالتزامات المالية",
      icon: faHandshakeSlash,
    },
    {
      id: 5,
      title: "فائض عن الحاجة الأساسية",
      description: "بعد خصم المصاريف الضرورية والديون المستحقة",
      icon: faTableCellsRowUnlock,
    },
    {
      id: 6,
      title: "النظام المالي",
      description: "أن يكون المال مُنظمًا بطريقة شرعية وقانونية",
      icon: faArrowTrendUp,
    },
  ];
  return (
    <div className="calculateZakat">
      <div className="container">
        <div className="title">
          <h2>احسب زكاتك بسهولة</h2>
          <p>
            احسب قيمة الزكاة المستحقة عليك بدقة وفقًا لأموالك، وتبرع بها لدعم
            المستحقين بطريقة آمنة وموثوقة.
          </p>
        </div>
        <div className="zakat-grid">
          <div className="zakat-form">
            <Section title="زكاة المال (ج.م)">
              <Input
                type="text"
                label="قيمة المال"
                value={money}
                setValue={setMoney}
              />
            </Section>

            <Section title="زكاة الأصول والممتلكات">
              <Input
                label="قيمة الأسهم والسندات"
                value={property}
                setValue={setProperty}
              />
            </Section>

            <Section title="زكاة الذهب">
              <Input
                label="وزن ذهب عيار 18 (جرام)"
                value={gold18}
                setValue={setGold18}
              />
              <Input
                label="وزن ذهب عيار 21 (جرام)"
                value={gold21}
                setValue={setGold21}
              />
            </Section>

            <Section title="زكاة العقارات">
              <Input
                label="قيمة الإيجار الشهري"
                value={building}
                setValue={setBuilding}
              />
            </Section>
          </div>

          {/* Right Side */}
          <div style={{ position: "relative" }}>
            <div className="zakat-result">
              <h3>قيمة الزكاة</h3>

              <ResultRow label="زكاة المال" value={moneyZakat} />
              <ResultRow label="زكاة الأصول" value={propertyZakat} />
              <ResultRow label="زكاة الذهب" value={goldZakat} />
              <ResultRow label="زكاة العقارات" value={buildingZakat} />

              <hr />

              <div className="total">الإجمالي: {total.toFixed(2)} ج.م</div>
              {!reachedNisab && totalZakatBase > 0 && (
                <p className="nisab no">
                  ❌ لم يبلغ إجمالي أموالك النصاب (85 جرام ذهب)
                </p>
              )}

              {reachedNisab && (
                <p className="nisab yes">
                  ✅ بلغ إجمالي أموالك النصاب وتجب الزكاة
                </p>
              )}

              <Link href={`/${locale}/cases`} className="donate-btn">
                تبرع الآن
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <h3>شروط وجوب الزكاة</h3>
          {zakatConditions.map((condition) => (
            <div
              className="col-12 col-md-6 col-lg-4 condition mb-4"
              key={condition.id}
            >
              <div className="item-condition">
                <div>
                  <FontAwesomeIcon icon={condition?.icon} className="i" />
                </div>
                <h5>{condition.title}</h5>
                <p>{condition.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      {children}
    </div>
  );
}

function Input({ label, value, setValue }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type="text"
        min="0"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        placeholder="أدخل القيمة"
      />
    </div>
  );
}

function ResultRow({ label, value }) {
  return (
    <div className="result-row">
      <span>{label}</span>
      <span>{value.toFixed(2)} ج.م</span>
    </div>
  );
}

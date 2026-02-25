"use client";
import { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faUsers,
  faCalendarAlt,
  faSearch,
  faLaptopHouse,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";
import "./opportunities.css";
import Link from "next/link";
import { useLocale } from "next-intl";
import Select from "react-select";

// ✅ 1. نقل البيانات خارج المكون لمنع إعادة التعريف في كل رندر (حل مشكلة التحذيرات)
const ALL_OPPORTUNITIES = [
  {
    id: 1,
    title: "تعليم أساسيات الحاسوب للأطفال",
    org: "مؤسسة العلم نور",
    description: "نبحث عن متطوعين لتدريس مبادئ الحاسوب والبرمجة للأطفال في المناطق النائية.",
    location: "القاهرة",
    category: "تعليمي",
    hours: 5,
    type: "حضوري",
    volunteersNeeded: 3,
    date: "15 مارس 2026",
  },
  {
    id: 2,
    title: "حملة تشجير وتجميل الميادين",
    org: "جمعية أصدقاء البيئة",
    description: "المشاركة في زراعة الأشجار وتجميل المساحات الخضراء لتحسين المظهر العام.",
    location: "الإسكندرية",
    category: "ميداني",
    hours: 4,
    type: "حضوري",
    volunteersNeeded: 10,
    date: "20 مارس 2026",
  },
  {
    id: 3,
    title: "كتابة محتوى لموقع خيري",
    org: "نبضة خير",
    description: "كتابة مقالات وقصص نجاح لنشر الوعي بالعمل التطوعي عبر منصات التواصل.",
    location: "كل المدن",
    category: "إداري",
    hours: 10,
    type: "عن بُعد",
    volunteersNeeded: 2,
    date: "1 مارس 2026",
  },
];

// ✅ 2. دوال الترجمة (خارج المكون لزيادة الكفاءة)
const translations = {
  locations: { 'القاهرة': 'Cairo', 'الإسكندرية': 'Alexandria', 'كل المدن': 'All Cities' },
  categories: { 'تعليمي': 'Educational', 'ميداني': 'Field', 'إداري': 'Administrative' },
  types: { 'حضوري': 'On-site', 'عن بُعد': 'Remote' }
};

const translate = (value, type, locale) => {
  if (locale === 'en' && translations[type][value]) {
    return translations[type][value];
  }
  return value;
};

export default function VolunteerOpportunities() {
  const locale = useLocale();

  // ✅ 3. استخراج القيم الفريدة في عملية واحدة محسنة
  const uniqueData = useMemo(() => {
    return {
      locations: [...new Set(ALL_OPPORTUNITIES.map(opp => opp.location))],
      categories: [...new Set(ALL_OPPORTUNITIES.map(opp => opp.category))],
      types: [...new Set(ALL_OPPORTUNITIES.map(opp => opp.type))]
    };
  }, []); // مصفوفة فارغة لأن البيانات ثابتة خارج المكون

  // ✅ 4. بناء خيارات Select ديناميكياً
  const cityOptions = useMemo(() => [
    { value: "all", label: locale === "en" ? "All Cities" : "كل المدن" },
    ...uniqueData.locations.map(loc => ({
      value: loc,
      label: translate(loc, 'locations', locale)
    }))
  ], [uniqueData.locations, locale]);

  const categoryOptions = useMemo(() => [
    { value: "all", label: locale === "en" ? "All Categories" : "كل الفئات" },
    ...uniqueData.categories.map(cat => ({
      value: cat,
      label: translate(cat, 'categories', locale)
    }))
  ], [uniqueData.categories, locale]);

  const workTypeOptions = useMemo(() => [
    { value: "all", label: locale === "en" ? "All Types" : "كل الأنواع" },
    ...uniqueData.types.map(t => ({
      value: t,
      label: translate(t, 'types', locale)
    }))
  ], [uniqueData.types, locale]);

  // حالات الفلترة
  const [selectedCity, setSelectedCity] = useState(cityOptions[0]);
  const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);
  const [selectedWorkType, setSelectedWorkType] = useState(workTypeOptions[0]);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ 5. الفلترة النهائية
  const filteredOpportunities = useMemo(() => {
    return ALL_OPPORTUNITIES.filter(opp => {
      const cityMatch = selectedCity.value === "all" || opp.location === selectedCity.value;
      const categoryMatch = selectedCategory.value === "all" || opp.category === selectedCategory.value;
      const typeMatch = selectedWorkType.value === "all" || opp.type === selectedWorkType.value;
      const searchMatch = searchTerm === "" || 
        opp.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        opp.org.toLowerCase().includes(searchTerm.toLowerCase());

      return cityMatch && categoryMatch && typeMatch && searchMatch;
    });
  }, [selectedCity, selectedCategory, selectedWorkType, searchTerm]);

  return (
    <div className="opp-container">
      {/* Header Section */}
      <div className="opp-header">
        <h2>
          استكشف <span>فرص التطوع</span> 🌍
        </h2>
        <p>ابحث عن الفرصة التي تناسب مهاراتك واصنع تأثيراً حقيقياً اليوم.</p>
      </div>

      {/* Filters Section */}
      <div className="filters-bar">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input 
            type="text" 
            placeholder="ابحث عن فرصة أو مؤسسة..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="select-filters">
          <Select
            instanceId="city-select"
            value={selectedCity}
            onChange={setSelectedCity}
            options={cityOptions}
            isRtl={locale === "ar"}
            className="my-select-container"
            classNamePrefix="my-select"
          />
          <Select
            instanceId="category-select"
            value={selectedCategory}
            onChange={setSelectedCategory}
            options={categoryOptions}
            isRtl={locale === "ar"}
            className="my-select-container"
            classNamePrefix="my-select"
          />
          <Select
            instanceId="worktype-select"
            value={selectedWorkType}
            onChange={setSelectedWorkType}
            options={workTypeOptions}
            isRtl={locale === "ar"}
            className="my-select-container"
            classNamePrefix="my-select"
          />
        </div>
      </div>

      <div className="results-count">
        {filteredOpportunities.length} {locale === "en" ? "opportunities found" : "فرصة متاحة"}
      </div>

      {/* Opportunities List */}
      <div className="opp-grid">
        {filteredOpportunities.map((opp) => (
          <div className="opportunity-card" key={opp.id}>
            <div className="opp-card-header">
              <span className={`type-tag ${opp.type === "عن بُعد" ? "remote" : "onsite"}`}>
                <FontAwesomeIcon icon={opp.type === "عن بُعد" ? faLaptopHouse : faWalking} />
                {" "}{opp.type}
              </span>
              <span className="category-tag">{opp.category}</span>
            </div>

            <div className="opp-card-body">
              <h3 className="opp-title">{opp.title}</h3>
              <h4 className="org-name">{opp.org}</h4>
              <p className="opp-desc">{opp.description}</p>

              <div className="opp-details">
                <div className="detail-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> <span>{opp.location}</span>
                </div>
                <div className="detail-item">
                  <FontAwesomeIcon icon={faClock} /> <span>{opp.hours} ساعات</span>
                </div>
                <div className="detail-item">
                  <FontAwesomeIcon icon={faUsers} /> <span>مطلوب {opp.volunteersNeeded}</span>
                </div>
                <div className="detail-item">
                  <FontAwesomeIcon icon={faCalendarAlt} /> <span>{opp.date}</span>
                </div>
              </div>
            </div>

            <div className="opp-card-footer">
              <Link href={`/${locale}/dashboard/volunteer/opportunities/${opp.id}`} className="apply-now-btn">
                {locale === "en" ? "Apply Now" : "التقديم الآن"}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredOpportunities.length === 0 && (
        <div className="no-results">
          {locale === "en" ? "No opportunities match your filters" : "لا توجد فرص تطوع تطابق معايير البحث"}
        </div>
      )}
    </div>
  );
}
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faStarHalfAlt, 
  faQuoteRight, 
  faCheckCircle,
  faAward
} from "@fortawesome/free-solid-svg-icons";
import "./volunteerRatings.css";

export default function VolunteerRatings() {
  // بيانات تجريبية للتقييمات
  const reviews = [
    {
      id: 1,
      orgName: "جمعية رسالة",
      date: "12 يناير 2026",
      rating: 5,
      comment: "متطوع ملتزم جداً ومبدع في التعامل مع الأطفال. أنجز المهام المطلوبة قبل الوقت المحدد.",
      task: "تعليم حاسوب"
    },
    {
      id: 2,
      orgName: "مؤسسة مصر الخير",
      date: "05 فبراير 2026",
      rating: 4.5,
      comment: "شخصية متعاونة جداً في العمل الجماعي، لديه مهارات تنظيمية ممتازة.",
      task: "تنظيم قافلة طبية"
    }
  ];

  const averageRating = 4.8;

  return (
    <div className="ratings-container">
      <div className="ratings-header">
        <div className="overall-card">
          <div className="rating-info">
            <span>متوسط التقييم العام</span>
            <h2>{averageRating}</h2>
            <div className="stars-row">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon 
                  key={i} 
                  icon={faStar} 
                  className={i < Math.floor(averageRating) ? "star-filled" : "star-empty"} 
                />
              ))}
            </div>
            <p>بناءً على {reviews.length} تقييم من المؤسسات</p>
          </div>
          <div className="rating-badge">
            <FontAwesomeIcon icon={faAward} />
          </div>
        </div>
      </div>

      <div className="reviews-section">
        <div className="section-title">
          <h3><FontAwesomeIcon icon={faQuoteRight} /> أحدث آراء المؤسسات</h3>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev) => (
            <div className="review-card" key={rev.id}>
              <div className="rev-header">
                <div>
                  <h4>{rev.orgName} <FontAwesomeIcon icon={faCheckCircle} className="verified-icon" /></h4>
                  <span className="task-tag">{rev.task}</span>
                </div>
                <span className="rev-date">{rev.date}</span>
              </div>
              
              <div className="rev-stars">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon 
                    key={i} 
                    icon={faStar} 
                    className={i < rev.rating ? "star-filled" : "star-empty"} 
                  />
                ))}
              </div>

              <p className="rev-comment">&rdquo;{rev.comment}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
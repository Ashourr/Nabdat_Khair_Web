"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faInfoCircle,
  faTrashAlt,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import "./notificationsPage.css";
import toast from "react-hot-toast";
import { useLocale } from "next-intl";

export default function NotificationsPage() {
  const locale = useLocale();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "تم استلام تبرعك بنجاح",
      message: "شكراً لك! تبرعك لحالة 'علاج طفل' تم بنجاح ووصل إلى المستفيد.",
      time: "منذ ساعتين",
      type: "success",
      isNew: true,
      icon: faCheckCircle,
    },
    {
      id: 2,
      title: "تحديث جديد بخصوص الحالة",
      message: "تم تحديث التقارير الطبية الخاصة بحالة 'عملية قلب مفتوح'.",
      time: "منذ يوم واحد",
      type: "info",
      isNew: true,
      icon: faInfoCircle,
    },
  ]);

  const deleteNotification = (id) => {
    Swal.fire({
      title: locale === "en" ? "Are you sure?" : "هل أنت متأكد؟",
      text:
        locale === "en"
          ? "You won't be able to revert this!"
          : "لن تتمكن من استعادة هذا الإشعار بعد حذفه!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7c3aed",
      cancelButtonColor: "#ef4444",
      confirmButtonText: locale === "en" ? "Yes, delete it!" : "نعم، احذفه!",
      cancelButtonText: locale === "en" ? "Cancel" : "إلغاء",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setNotifications(notifications.filter((noti) => noti.id !== id));

        Swal.fire({
          title: "تم الحذف!",
          text: "تم حذف الإشعار بنجاح.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        toast.success(
          locale === "en" ? "Notification Deleted ✅" : "تم حذف الإشعار ✅",
        );
      }
    });
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((noti) =>
        noti.id === id ? { ...noti, isNew: false } : noti,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((noti) => ({ ...noti, isNew: false })));
    toast.success(
      locale === "en" ? "All marked as read" : "تم تعيين الكل كمقروء",
    );
  };

  return (
    <div className="notifications-container">
      <header className="noti-header">
        <div>
          <h1>{locale === "en" ? "Notifications" : "الإشعارات"}</h1>
          <p>
            {locale === "en"
              ? "Stay updated on your donations."
              : "ابقَ على اطلاع بآخر التحديثات حول تبرعاتك."}
          </p>
        </div>

        <div>
          <button className="mark-all-btn" onClick={markAllAsRead}>
            <FontAwesomeIcon icon={faCheckDouble} />{" "}
            {locale === "en" ? "Mark all as read" : "تعيين الكل كمقروء"}
          </button>
        </div>
      </header>

      <div className="noti-list">
        {notifications.length > 0 ? (
          notifications.map((noti) => (
            <div
              key={noti.id}
              className={`noti-card ${noti.isNew ? "unread" : ""} ${noti.type}`}
            >
              <div className="noti-content">
                <div className={`noti-icon-wrapper ${noti.type}`}>
                  <FontAwesomeIcon icon={noti.icon} />
                </div>

                <div className="noti-text">
                  <div className="noti-top">
                    <h3>{noti.title}</h3>
                    {noti.isNew && (
                      <span className="new-badge">
                        {locale === "en" ? "New" : "جديد"}
                      </span>
                    )}
                  </div>
                  <p>{noti.message}</p>
                  <span className="noti-time">{noti.time}</span>
                </div>
              </div>

              <div className="noti-actions">
                {noti.isNew && (
                  <button
                    className="action-btn"
                    title="تحديد كمقروء"
                    onClick={() => markAsRead(noti.id)}
                  >
                    <FontAwesomeIcon icon={faCheckDouble} />
                  </button>
                )}

                <button
                  className="action-btn delete"
                  title="حذف"
                  onClick={() => deleteNotification(noti.id)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-notifications">
            {locale === "en"
              ? "No notifications currently"
              : "لا توجد إشعارات حالياً"}
          </div>
        )}
      </div>
      {notifications.length > 0 && (
        <button className="show-more">
          {locale === "en" ? "Show older notifications" : "عرض إشعارات أقدم"}
        </button>
      )}
    </div>
  );
}

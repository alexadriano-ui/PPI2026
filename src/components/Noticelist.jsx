import NoticeCard from "./Noticecard";
import "./Noticelist.css";

function NoticeList({ notices, onToggleFeatured, onDeleteNotice }) {
  return (
    <section className="notice-list">
      <h2>Mural Digital do IFRN - Campus Macau</h2>

      {notices.map((notice) => (
        <NoticeCard
          key={notice.id}
          notice={notice}
          onToggleFeatured={onToggleFeatured}
          onDeleteNotice={onDeleteNotice}
        />
      ))}
    </section>
  );
}

export default NoticeList;
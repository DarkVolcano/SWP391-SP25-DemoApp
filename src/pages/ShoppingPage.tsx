import { Card, Col, Row, Typography, Button } from "antd";
import styles from "./SkinTherapist.module.css"; // Import CSS module

const { Title, Text } = Typography;

const experts = [
  {
    id: 1,
    name: "Nancy Reimer",
    expertise: "Giáo dục & Kiến thức chăm sóc da",
    experience:
      "Hàng chục năm kinh nghiệm và kiến thức chuyên sâu về chăm sóc da.",
    field: "Giáo dục",
    degree: "Giám đốc Giáo dục",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Tiffany Medois",
    expertise: "Tư vấn viên & Chuyên viên thẩm mỹ",
    experience:
      "Từng làm nhà báo, nhà sản xuất, nhà làm phim tài liệu và biên tập viên.",
    field: "Tư vấn",
    degree: "Chuyên viên Thẩm mỹ Chứng nhận",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Katina Gilmore",
    expertise: "Điều dưỡng & Thẩm mỹ",
    experience:
      "Kết hợp giữa điều dưỡng và thẩm mỹ để mang lại sự chuyên môn cá nhân hóa.",
    field: "Chăm sóc sức khỏe",
    degree: "Y tá Chứng nhận (R.N.)",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Bill Levins",
    expertise: "Giám đốc Tiếp thị",
    experience:
      "Mang đến kiến thức thông qua sự am hiểu sâu sắc trong ngành kinh doanh chăm sóc da.",
    field: "Tiếp thị",
    degree: "Phó Chủ tịch Tiếp thị",
    image: "https://via.placeholder.com/150",
  },
];

const SkinTherapist = () => {
  return (
    <div className={styles.container}>
      {/* Tiêu đề */}
      <Title level={2} className={styles.heading}>
        Chọn chuyên viên trị liệu da cho bạn
      </Title>

      {/* Danh sách chuyên viên */}
      <Row gutter={[32, 32]} justify="center">
        {experts.map((expert) => (
          <Col xs={24} sm={12} md={8} lg={6} key={expert.id}>
            <Card
              hoverable
              className={styles["expert-card"]}
              cover={
                <img
                  alt={expert.name}
                  src={expert.image}
                  className={styles["expert-image"]}
                />
              }
            >
              <Title level={4} style={{ marginBottom: "5px", color: "#3A5A40" }}>
                {expert.name}
              </Title>
              <Text strong className={styles["expert-info"]}>
                {expert.expertise}
              </Text>
              <br />
              <Text className={styles["expert-info"]}>{expert.experience}</Text>
              <br />
              <Text type="secondary" className={styles["expert-info"]}>
                Lĩnh vực: {expert.field}
              </Text>
              <br />
              <Text type="secondary" className={styles["expert-info"]}>
                Bằng cấp: {expert.degree}
              </Text>
              <div style={{ marginTop: "15px" }}>
                <Button
                  type="primary"
                  shape="round"
                  className={styles.button}
                >
                  Đặt lịch với {expert.name.split(" ")[0]}
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SkinTherapist;